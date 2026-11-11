"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { BOOKS } from "./book-scene";
import styles from "./BookReader.module.css";
import bookStyles from "./BookTimeline.module.css";

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
  const origin = useRef("none");
  const travel = useAnimationControls();
  const cover = useAnimationControls();
  const leaf = useAnimationControls();
  const backdrop = useAnimationControls();
  const gentle = reducedMotion || opening.immediate;
  const book = BOOKS[opening.index];

  useEffect(() => {
    const dialog = dialogRef.current;
    const volume = volumeRef.current;
    if (!dialog || !volume) return;
    dialog.showModal();
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
    void travel.start({ transform: destination, opacity: 1, transition: { duration: gentle ? 0.15 : 0.55, ease: SETTLE } });
    if (!gentle) {
      void cover.start({ transform: "rotateY(-174deg)", transition: { delay: 0.12, duration: 0.68, ease: TURN } });
      void leaf.start({ transform: "rotateY(-170deg)", transition: { delay: 0.23, duration: 0.65, ease: TURN } });
    }
    return () => {
      travel.stop();
      cover.stop();
      leaf.stop();
      backdrop.stop();
      dialog.close();
    };
  }, [opening, gentle, travel, cover, leaf, backdrop]);

  const close = useCallback(async () => {
    if (closing.current) return;
    closing.current = true;
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

  return (
    <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="reader-title"
      onCancel={(event) => { event.preventDefault(); void close(); }}>
      <motion.div className={styles.backdrop} initial={{ opacity: 0 }} animate={backdrop} onClick={() => void close()} aria-hidden="true" />
      <button type="button" autoFocus className={styles.close} onClick={() => void close()} aria-label="Fechar livro">×</button>
      <div className={styles.perspective}>
        <motion.div ref={volumeRef} className={`${styles.volume} ${bookStyles[book.color]}`} animate={travel} initial={{ opacity: 0 }}>
          <div className={styles.board} aria-hidden="true" />
          <article className={styles.firstPage}>
            <span className={styles.runningHead}>VIDA · VOLUME {String(book.year).padStart(2, "0")}</span>
            <div className={styles.chapter}>
              <span className={styles.eyebrow}>PRIMEIRO CAPÍTULO</span>
              <h2 id="reader-title">Ano {book.year}</h2>
              <div className={styles.rule} aria-hidden="true" />
            </div>
            <span className={styles.folio}>1</span>
          </article>
          <motion.div className={styles.hinge} animate={cover}>
            <div className={styles.coverFront} aria-hidden="true">
              <span className={styles.coverVolume}>VIDA · VOLUME {String(book.year).padStart(2, "0")}</span>
              <span className={styles.coverNumber}>{book.year}</span>
            </div>
            <div className={styles.coverInside} aria-hidden="true" />
          </motion.div>
          <motion.div className={`${styles.hinge} ${styles.leaf}`} animate={leaf}>
            <div className={styles.leafFront} aria-hidden="true" />
            <div className={styles.leafBack} aria-hidden="true">
              <span>Um livro aberto.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <p className={styles.hint}>ANO {book.year} <span>·</span> ESC PARA FECHAR</p>
    </dialog>
  );
}
