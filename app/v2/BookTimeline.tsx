"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useTransform } from "framer-motion";
import Book from "./Book";
import BookSceneControls from "./BookSceneControls";
import useBookNavigation from "./useBookNavigation";
import useReducedMotion from "./useReducedMotion";
import { BOOKS, DEFAULT_SETTINGS, STORAGE_KEY, clamp, readSceneSettings, type ViewPoint } from "./book-scene";
import styles from "./BookTimeline.module.css";

type SceneDrag = { x: number; y: number; lastY: number; view: ViewPoint; moved: boolean };

export default function BookTimeline() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const [compact, setCompact] = useState(false);
  const [isDraggingScene, setIsDraggingScene] = useState(false);
  const [isolateActive, setIsolateActive] = useState(false);
  const stageRef = useRef<HTMLElement>(null);
  const sceneDragRef = useRef<SceneDrag | null>(null);
  const suppressClick = useRef(false);
  const reducedMotion = useReducedMotion();
  const { activeIndex, progress, goToBook, stepBook, scrollBooks } = useBookNavigation(stageRef);
  // Orbit through the middle of the remaining stack, so a half-turn does not
  // bring the deep books through the camera's near plane.
  const orbitOrigin = useTransform(progress, (position) =>
    `50% var(--orbit-center-y) ${isolateActive ? 0 : -(BOOKS.length - 1 - clamp(position, 0, BOOKS.length - 1)) * 22}px`,
  );

  useEffect(() => {
    try {
      setSettings(readSceneSettings(localStorage.getItem(STORAGE_KEY)));
    } catch {
      // The scene also works when browser storage is unavailable.
    }
    setSettingsLoaded(true);
    const query = window.matchMedia("(max-width: 700px)");
    const updateCompact = () => setCompact(query.matches);
    updateCompact();
    query.addEventListener("change", updateCompact);
    return () => query.removeEventListener("change", updateCompact);
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
  const setSpacing = useCallback((spacing: number) => setSettings((current) => ({ ...current, spacing })), []);
  const setSize = useCallback((size: number) => setSettings((current) => ({ ...current, size })), []);
  const resetScene = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
    setIsolateActive(false);
    goToBook(0, true);
  }, [goToBook]);
  const endDrag = () => {
    sceneDragRef.current = null;
    setIsDraggingScene(false);
  };

  return (
    <main className={`${styles.page} ${isolateActive ? styles.isolated : ""}`} data-reduced-motion={reducedMotion}>
      <header className={styles.intro}>
        <p>UM LIVRO ABERTO</p>
        <h1>VIDA</h1>
        <span>Cada ano, um novo capítulo.</span>
      </header>

      <section
        ref={stageRef}
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
        onPointerDown={(event) => {
          if (event.button !== 0 || !event.isPrimary) return;
          suppressClick.current = false;
          sceneDragRef.current = { x: event.clientX, y: event.clientY, lastY: event.clientY, view: settings.view, moved: false };
          // Capture on the cover first so a click still activates it, even if a
          // fast drag leaves the scene before the first intermediate move.
          const cover = event.target instanceof Element ? event.target.closest("button") : null;
          (cover ?? event.currentTarget).setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          const drag = sceneDragRef.current;
          if (!drag) return;
          if (!drag.moved) {
            if (Math.hypot(event.clientX - drag.x, event.clientY - drag.y) < 5) return;
            drag.moved = true;
            suppressClick.current = true;
            event.currentTarget.setPointerCapture(event.pointerId);
            if (event.pointerType !== "touch") setIsDraggingScene(true);
          }
          if (event.pointerType === "touch") {
            scrollBooks((drag.lastY - event.clientY) * 2);
            drag.lastY = event.clientY;
          } else {
            setView({
              x: Math.round(drag.view.x + (event.clientX - drag.x) * 0.45),
              y: Math.round(drag.view.y + (event.clientY - drag.y) * 0.45),
            });
          }
        }}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={(event) => {
          if (event.target === event.currentTarget) endDrag();
        }}
        onClickCapture={(event) => {
          if (!suppressClick.current) return;
          event.preventDefault();
          event.stopPropagation();
          suppressClick.current = false;
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
              onActivate={goToBook}
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
    </main>
  );
}
