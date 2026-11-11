"use client";

import { memo } from "react";
import { motion, useTransform, type MotionStyle, type MotionValue } from "framer-motion";
import { BOOKS, getBookPose, type BookState, type LifeBook } from "./book-scene";
import styles from "./BookTimeline.module.css";

interface BookProps {
  book: LifeBook;
  progress: MotionValue<number>;
  spacing: number;
  size: number;
  state: BookState;
  reducedMotion: boolean;
  onActivate: (index: number, immediate?: boolean) => void;
}

const Book = memo(function Book({ book, progress, spacing, size, state, reducedMotion, onActivate }: BookProps) {
  const index = book.year - 1;
  const pose = useTransform(progress, (value) => getBookPose(index, value, spacing, size, reducedMotion));
  const transform = useTransform(pose, (value) => value.transform);
  const opacity = useTransform(pose, (value) => value.opacity);
  const visibility = useTransform(opacity, (value) => value === 0 ? "hidden" : "visible");
  const pointerEvents = useTransform(progress, (value) => value > index + 0.05 ? "none" : "auto");

  return (
    <motion.article
      className={`${styles.book} ${styles[book.color]}`}
      style={{
        transform,
        visibility,
        pointerEvents,
        zIndex: BOOKS.length - index,
        "--book-tab": book.tab,
      } as MotionStyle}
      data-year={book.year}
      data-state={state}
      aria-label={`Ano ${book.year} da vida`}
      aria-current={state === "active" ? "step" : undefined}
      aria-hidden={state === "passed" ? true : undefined}
    >
      {/* Fade the faces separately: opacity on the 3D parent would flatten the book. */}
      <motion.div className={styles.backCover} style={{ opacity }} data-face="back" aria-hidden="true">
        <span className={styles.backVolume}>VOLUME {String(book.year).padStart(2, "0")}</span>
        <span className={styles.backTitle}>VIDA</span>
        <span className={styles.backYear}>ANO {book.year}</span>
      </motion.div>
      <motion.div className={styles.bookSpine} style={{ opacity }} data-face="spine" aria-hidden="true">
        <span className={styles.spineTitle}>VIDA</span>
        <span className={styles.spineYear}>{String(book.year).padStart(2, "0")}</span>
      </motion.div>
      <motion.div className={styles.topPages} style={{ opacity }} data-face="top" aria-hidden="true" />
      <motion.div className={styles.bottomPages} style={{ opacity }} data-face="bottom" aria-hidden="true" />
      <motion.div className={styles.bookSide} style={{ opacity }} data-face="pages" aria-hidden="true" />
      <motion.button
        type="button"
        className={styles.cover}
        data-face="front"
        style={{ opacity }}
        aria-label={`Mostrar ano ${book.year}`}
        tabIndex={state === "passed" ? -1 : 0}
        onClick={(event) => onActivate(index, event.detail === 0)}
      >
        <span className={styles.spine} aria-hidden="true" />
        <span className={styles.number} aria-hidden="true">{book.year}</span>
      </motion.button>
      <motion.span className={styles.tab} style={{ opacity }} aria-hidden="true" />
    </motion.article>
  );
});

export default Book;
