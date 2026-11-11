"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { BOOKS } from "./book-scene";
import styles from "./BookReader.module.css";
import bookStyles from "./BookTimeline.module.css";
import BookPage from "./BookPage";
import useBookPages from "./useBookPages";

export type OpenBook = { index: number; source: DOMRect; immediate: boolean };

const SETTLE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const TURN: [number, number, number, number] = [0.65, 0.045, 0.355, 1];

export default function BookReader({ opening, reducedMotion, onClose }: {
  opening: OpenBook;
  reducedMotion: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);
  const closing = useRef(false);
  const turning = useRef(false);
  const [ready, setReady] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [spread, setSpread] = useState(0);
  const [turn, setTurn] = useState<{ from: number; to: number; direction: number } | null>(null);
  const origin = useRef("none");
  const travel = useAnimationControls();
  const cover = useAnimationControls();
  const leaf = useAnimationControls();
  const backdrop = useAnimationControls();
  const gentle = reducedMotion || opening.immediate;
  const book = BOOKS[opening.index];
  const { pages, metrics } = useBookPages(volumeRef, book.year);
  const lastSpread = Math.floor(pages.length / 2);
  const currentSpread = Math.min(spread, lastSpread);
  const leftPage = (position: number) => position === 0 ? undefined : pages[position * 2 - 1];
  const rightPage = (position: number) => pages[position * 2];

  useEffect(() => {
    const dialog = dialogRef.current;
    const volume = volumeRef.current;
    if (!dialog || !volume) return;
    dialog.showModal();
    dialog.focus({ preventScroll: true });
    let disposed = false;
    const { width, height } = volume.getBoundingClientRect();
    const source = opening.source;
    // Same-sized model throughout; only transform changes during the flight.
    const scale = source.width / width;
    origin.current = `translate3d(${source.left - window.innerWidth / 2}px, ${source.top - window.innerHeight / 2}px, 0px) rotateX(0deg) scale(${scale})`;
    const destination = `translate3d(0px, ${-height / 2}px, 0px) rotateX(4deg) scale(1)`;
    travel.set({ transform: gentle ? destination : origin.current, opacity: gentle ? 0 : 1 });
    cover.set({ transform: `rotateY(${gentle ? -174 : 0}deg)` });
    leaf.set({ transform: `rotateY(${gentle ? -170 : 0}deg)` });
    void backdrop.start({ opacity: 1, transition: { duration: 0.22 } });
    void Promise.all([
      travel.start({ transform: destination, opacity: 1, transition: { duration: gentle ? 0.15 : 0.55, ease: SETTLE } }),
      ...(gentle ? [] : [
        cover.start({ transform: "rotateY(-174deg)", transition: { delay: 0.12, duration: 0.68, ease: TURN } }),
        leaf.start({ transform: "rotateY(-170deg)", transition: { delay: 0.23, duration: 0.65, ease: TURN } }),
      ]),
    ]).then(() => {
      if (!disposed && !closing.current) setReady(true);
    });
    return () => {
      disposed = true;
      travel.stop();
      cover.stop();
      leaf.stop();
      backdrop.stop();
      dialog.close();
    };
  }, [opening, gentle, travel, cover, leaf, backdrop]);

  useEffect(() => {
    if (!ready || isClosing) return;
    // ResizeObserver reports the untransformed page size. Keep the open spread
    // centered after a window resize without replaying its opening animation.
    const height = volumeRef.current?.clientHeight;
    if (height) travel.set({ transform: `translate3d(0px, ${-height / 2}px, 0px) rotateX(4deg) scale(1)` });
  }, [ready, isClosing, metrics.height, travel]);

  const close = useCallback(async () => {
    if (closing.current) return;
    closing.current = true;
    setIsClosing(true);
    setTurn(null);
    if (gentle) {
      await Promise.all([
        travel.start({ opacity: 0, transition: { duration: 0.15 } }),
        backdrop.start({ opacity: 0, transition: { duration: 0.15 } }),
      ]);
    } else {
      // Animation controls retarget from the current pose, even during opening.
      await Promise.all([
        cover.start({ transform: "rotateY(0deg)", transition: { duration: 0.32, ease: TURN } }),
        leaf.start({ transform: "rotateY(0deg)", transition: { duration: 0.28, ease: TURN } }),
      ]);
      await Promise.all([
        travel.start({ transform: origin.current, transition: { duration: 0.34, ease: SETTLE } }),
        backdrop.start({ opacity: 0, transition: { duration: 0.3 } }),
      ]);
    }
    onClose();
  }, [gentle, travel, backdrop, cover, leaf, onClose]);

  const changePage = (direction: number) => {
    if (!ready || closing.current || turning.current) return;
    if (direction < 0 && currentSpread === 0) {
      void close();
      return;
    }
    const next = Math.min(lastSpread, Math.max(0, currentSpread + direction));
    if (next === currentSpread) return;
    if (reducedMotion) {
      setSpread(next);
      return;
    }
    turning.current = true;
    setTurn({ from: currentSpread, to: next, direction });
  };

  const displayLeft = turn ? leftPage(turn.direction > 0 ? turn.from : turn.to) : leftPage(currentSpread);
  const displayRight = turn ? rightPage(turn.direction > 0 ? turn.to : turn.from) : rightPage(currentSpread);
  const firstVisible = leftPage(currentSpread)?.number ?? rightPage(currentSpread)?.number ?? 1;
  const lastVisible = rightPage(currentSpread)?.number ?? firstVisible;

  return (
    <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="reader-title" aria-describedby="reader-hint" tabIndex={-1}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          event.stopPropagation();
          changePage(event.key === "ArrowRight" ? 1 : -1);
        } else if (event.key === "Home") {
          event.preventDefault();
          void close();
        } else if (event.key === "End" && ready && !turning.current) {
          event.preventDefault();
          setSpread(lastSpread);
        }
      }}
      onCancel={(event) => { event.preventDefault(); void close(); }}>
      <h2 id="reader-title" className={styles.srOnly}>Livro do ano {book.year}</h2>
      <motion.div className={styles.backdrop} initial={{ opacity: 0 }} animate={backdrop} onClick={() => void close()} aria-hidden="true" />
      <div className={styles.perspective}>
        <motion.div ref={volumeRef} className={`${styles.volume} ${bookStyles[book.color]}`} data-open={ready && !isClosing} animate={travel} initial={{ opacity: 0 }}>
          <div className={styles.board} aria-hidden="true" />
          <div className={`${styles.board} ${styles.leftBoard}`} aria-hidden="true" />
          <div className={styles.leftStack}><BookPage page={displayLeft} metrics={metrics} year={book.year} side="left" /></div>
          <BookPage page={displayRight} metrics={metrics} year={book.year} side="right" />
          {turn && (
            <>
            <motion.div className={styles.turnShadow} initial={{ opacity: 0 }} animate={{ opacity: [0, 0.18, 0] }} transition={{ duration: 0.62, ease: TURN }} aria-hidden="true" />
            <motion.div className={`${styles.hinge} ${styles.turningSheet}`} key={`${turn.from}-${turn.to}`}
              initial={{ transform: `translateZ(6px) rotateY(${turn.direction > 0 ? 0 : -180}deg)` }}
              animate={{ transform: `translateZ(6px) rotateY(${turn.direction > 0 ? -180 : 0}deg)` }}
              transition={{ duration: 0.62, ease: TURN }}
              onAnimationComplete={() => {
                if (closing.current) return;
                setSpread(turn.to);
                setTurn(null);
                turning.current = false;
              }} aria-hidden="true">
              <div className={styles.sheetFront}><BookPage page={rightPage(turn.direction > 0 ? turn.from : turn.to)} metrics={metrics} year={book.year} side="right" decorative /></div>
              <div className={styles.sheetBack}><BookPage page={leftPage(turn.direction > 0 ? turn.to : turn.from)} metrics={metrics} year={book.year} side="left" decorative /></div>
            </motion.div>
            </>
          )}
          <motion.div className={`${styles.hinge} ${styles.openingCover}`} animate={cover}>
            <div className={styles.coverFront} aria-hidden="true">
              <span className={styles.coverVolume}>VIDA · VOLUME {String(book.year).padStart(2, "0")}</span>
              <span className={styles.coverNumber}>{book.year}</span>
            </div>
            <div className={styles.coverInside} aria-hidden="true" />
          </motion.div>
          <motion.div className={`${styles.hinge} ${styles.leaf} ${styles.openingCover}`} animate={leaf}>
            <div className={styles.leafFront} aria-hidden="true" />
            <div className={styles.leafBack} aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>
      <nav className={styles.readerNavigation} aria-label="Páginas do livro">
        <button type="button" disabled={!ready || isClosing || !!turn} onClick={() => changePage(-1)} aria-label={currentSpread === 0 ? "Voltar à capa e fechar o livro" : "Página anterior"}>←</button>
        <output aria-live="polite" aria-atomic="true">{firstVisible === lastVisible ? firstVisible : `${firstVisible}–${lastVisible}`} <span>/ {pages.length}</span></output>
        <button type="button" disabled={!ready || isClosing || !!turn || currentSpread === lastSpread} onClick={() => changePage(1)} aria-label="Próxima página">→</button>
      </nav>
      <p id="reader-hint" className={styles.hint}>← → PARA VIRAR <span>·</span> CLIQUE FORA OU VOLTE À CAPA PARA FECHAR</p>
    </dialog>
  );
}
