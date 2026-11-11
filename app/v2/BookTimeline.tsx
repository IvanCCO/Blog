"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useTransform } from "framer-motion";
import Book from "./Book";
import BookReader, { type OpenBook } from "./BookReader";
import BookSceneControls from "./BookSceneControls";
import useBookNavigation from "./useBookNavigation";
import useReducedMotion from "./useReducedMotion";
import useSceneGestures from "./useSceneGestures";
import { BOOKS, DEFAULT_SETTINGS, STORAGE_KEY, clamp, readSceneSettings, type ViewPoint } from "./book-scene";
import styles from "./BookTimeline.module.css";

export default function BookTimeline() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const [compact, setCompact] = useState(false);
  const [isolateActive, setIsolateActive] = useState(false);
  const [openBook, setOpenBook] = useState<OpenBook | null>(null);
  const pageRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { activeIndex, progress, goToBook, stepBook, scrollBooks } = useBookNavigation(pageRef);
  // Orbit through the middle of the remaining stack, so a half-turn does not
  // bring the deep books through the camera's near plane.
  const orbitOrigin = useTransform(progress, (position) =>
    `50% var(--orbit-center-y) ${isolateActive ? 0 : -(BOOKS.length - 1 - clamp(position, 0, BOOKS.length - 1)) * 22}px`,
  );

  useEffect(() => {
    const initialize = window.requestAnimationFrame(() => {
      try {
        setSettings(readSceneSettings(localStorage.getItem(STORAGE_KEY)));
      } catch {
        // The scene also works when browser storage is unavailable.
      }
      setSettingsLoaded(true);
    });
    const query = window.matchMedia("(max-width: 700px)");
    const updateCompact = () => setCompact(query.matches);
    const initialCompact = window.requestAnimationFrame(updateCompact);
    query.addEventListener("change", updateCompact);
    return () => {
      window.cancelAnimationFrame(initialize);
      window.cancelAnimationFrame(initialCompact);
      query.removeEventListener("change", updateCompact);
    };
  }, []);

  useEffect(() => {
    if (!settingsLoaded) return;
    const timeout = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...settings, version: 2 }));
      } catch {
        // Saving design preferences is optional.
      }
    }, 180);
    return () => window.clearTimeout(timeout);
  }, [settingsLoaded, settings]);

  const setView = useCallback((view: ViewPoint) => setSettings((current) => ({ ...current, view })), []);
  const openReader = useCallback((index: number, element: HTMLElement, immediate: boolean) => {
    setOpenBook({ index, source: element.getBoundingClientRect(), immediate });
  }, []);
  const closeReader = useCallback(() => setOpenBook(null), []);
  const setSpacing = useCallback((spacing: number) => setSettings((current) => ({ ...current, spacing })), []);
  const setSize = useCallback((size: number) => setSettings((current) => ({ ...current, size })), []);
  const resetScene = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
    setIsolateActive(false);
    goToBook(0, true);
  }, [goToBook]);
  const isDraggingScene = useSceneGestures(pageRef, settings.view, setView, scrollBooks, openReader);

  return (
    <main ref={pageRef} className={`${styles.page} ${isolateActive ? styles.isolated : ""}`} data-reduced-motion={reducedMotion}>
      <header className={styles.intro}>
        <p>UM LIVRO ABERTO</p>
        <h1>VIDA</h1>
        <span>Cada ano, um novo capítulo.</span>
      </header>

      <section
        className={`${styles.stack} ${isDraggingScene ? styles.draggingScene : ""}`}
        aria-label="22 livros dos anos da vida"
        aria-describedby="book-navigation-hint"
        tabIndex={0}
        onKeyDown={(event) => {
          if (["ArrowDown", "ArrowRight", "PageDown"].includes(event.key)) {
            event.preventDefault();
            stepBook(1, true);
          } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
            event.preventDefault();
            stepBook(-1, true);
          } else if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            goToBook(event.key === "Home" ? 0 : BOOKS.length - 1, true);
          }
        }}

      >
        <motion.div className={styles.scene} style={{ transform: `rotateX(${settings.view.y}deg) rotateY(${settings.view.x}deg)`, transformOrigin: orbitOrigin }}>
          {BOOKS.map((book, index) => (
            <Book
              key={book.year}
              book={book}
              progress={progress}
              spacing={settings.spacing * (compact ? 0.45 : 1)}
              size={settings.size}
              state={index === activeIndex ? "active" : index < activeIndex ? "passed" : "upcoming"}
              reducedMotion={reducedMotion}
              onActivate={openReader}
              isOpen={openBook?.index === index}
            />
          ))}
        </motion.div>
      </section>

      <nav className={styles.bookNavigation} aria-label="Navegar pelos anos da vida">
        <div className={styles.navigationRow}>
          <button type="button" className={styles.navigationButton} aria-label="Livro anterior" disabled={activeIndex === 0} onClick={(event) => stepBook(-1, event.detail === 0)}>
            <span aria-hidden="true">↑</span>
          </button>
          <output className={styles.activeYear} aria-live="polite" aria-atomic="true">
            <span className={styles.activeYearLabel}>ANO {activeIndex + 1}</span>
            <span className={styles.bookCount}>{String(activeIndex + 1).padStart(2, "0")} <span>/ 22</span></span>
          </output>
          <button type="button" className={styles.navigationButton} aria-label="Próximo livro" disabled={activeIndex === BOOKS.length - 1} onClick={(event) => stepBook(1, event.detail === 0)}>
            <span aria-hidden="true">↓</span>
          </button>
        </div>
        <p id="book-navigation-hint" className={styles.navigationHint}>Role para mudar de ano · arraste para girar</p>
      </nav>

      <span className={styles.edition}>CAPÍTULOS DA VIDA · 01—22</span>

      <BookSceneControls compact={compact} view={settings.view} onViewChange={setView} spacing={settings.spacing} onSpacingChange={setSpacing} size={settings.size} onSizeChange={setSize} onReset={resetScene}>
        <label className={styles.activeBookControl}>
          <span>Livro ativo</span>
          <select value={activeIndex} onChange={(event) => goToBook(Number(event.target.value), true)}>
            {BOOKS.map((book, index) => <option key={book.year} value={index}>Ano {book.year}</option>)}
          </select>
        </label>
        <label className={styles.inspectionToggle}>
          <input type="checkbox" checked={isolateActive} onChange={(event) => setIsolateActive(event.target.checked)} />
          <span>Isolar livro ativo</span>
        </label>
      </BookSceneControls>
      {openBook && <BookReader opening={openBook} reducedMotion={reducedMotion} onClose={closeReader} />}
    </main>
  );
}
