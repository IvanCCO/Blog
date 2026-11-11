import type { BookPageData, PageMetrics } from "./book-pagination";
import styles from "./BookReader.module.css";

export default function BookPage({ page, metrics, year, side, decorative = false }: {
  page?: BookPageData;
  metrics: PageMetrics;
  year: number;
  side: "left" | "right";
  decorative?: boolean;
}) {
  return (
    <article className={`${styles.paper} ${side === "left" ? styles.leftPaper : ""}`} aria-label={page ? `Página ${page.number}` : "Página em branco"} aria-hidden={decorative || !page ? true : undefined}>
      <span className={styles.runningHead}>VIDA · ANO {year}</span>
      <div className={styles.pageContent} style={{ fontSize: metrics.fontSize, lineHeight: `${metrics.lineHeight}px` }}>
        {page?.items.map((item, index) => item.type === "text" ? (
          <p key={index} className={styles.textLine} style={{ left: item.x, top: item.y, width: item.width, ...(item.heading ? { fontSize: metrics.fontSize * 1.8, lineHeight: `${metrics.lineHeight * 1.8}px`, fontStyle: "italic" } : {}) }}>{item.text}</p>
        ) : (
          <figure key={index} className={styles.pageImage} style={{ left: item.x, top: item.y, width: item.width }}>
            {/* Dimensions are known before loading so text never jumps around an image. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" style={{ height: item.height }} />
            {item.caption && <figcaption style={{ fontSize: metrics.fontSize * 0.7, lineHeight: `${metrics.lineHeight}px`, maxHeight: metrics.lineHeight * 2 }}>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {page && <span className={styles.folio}>{page.number}</span>}
    </article>
  );
}
