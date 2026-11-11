"use client";

import { useRef, useState, type ReactNode } from "react";
import { describeView, nearestAngle, wrapAngle, type ViewPoint } from "./book-scene";
import styles from "./BookTimeline.module.css";

const VIEW_PRESETS = [
  { name: "Capa", x: 0, y: 0 },
  { name: "Verso", x: 180, y: 0 },
  { name: "Lombada", x: 90, y: 0 },
  { name: "Páginas", x: 270, y: 0 },
  { name: "Topo", x: 0, y: -90 },
  { name: "Base", x: 0, y: 90 },
];

interface BookSceneControlsProps {
  children: ReactNode;
  compact: boolean;
  view: ViewPoint;
  onViewChange: (view: ViewPoint) => void;
  spacing: number;
  onSpacingChange: (spacing: number) => void;
  size: number;
  onSizeChange: (size: number) => void;
  onReset: () => void;
}

export default function BookSceneControls({ children, compact, view, onViewChange, spacing, onSpacingChange, size, onSizeChange, onReset }: BookSceneControlsProps) {
  const orbitRef = useRef<HTMLDivElement>(null);
  const orbitDrag = useRef<{ x: number; y: number; view: ViewPoint } | null>(null);
  const [expandedOverride, setExpanded] = useState<boolean | null>(null);
  const expanded = expandedOverride ?? !compact;
  const yaw = wrapAngle(view.x) * Math.PI / 180;
  const pitch = wrapAngle(view.y) * Math.PI / 180;

  const updateViewFromPointer = (clientX: number, clientY: number) => {
    const drag = orbitDrag.current;
    if (!drag) return;
    onViewChange({
      x: Math.round(drag.view.x + (clientX - drag.x) * 0.9),
      y: Math.round(drag.view.y + (clientY - drag.y) * 0.9),
    });
  };

  return (
    <aside className={styles.controls} aria-label="Controles de design dos livros">
      <details open={expanded} onToggle={(event) => setExpanded(event.currentTarget.open)}>
        <summary className={styles.controlsHeading}>
          <span>
            <span className={styles.controlEyebrow}>MODO DE DESIGN</span>
            <span className={styles.controlsTitle}>Ajustar livros</span>
          </span>
          <span className={styles.disclosureArrow} aria-hidden="true">⌄</span>
        </summary>
        <div className={styles.controlsContent}>
          <div className={styles.controlLabelRow}>
            <span className={styles.controlValue}>22 livros · pilha 3D</span>
            <button className={styles.resetButton} onClick={onReset} type="button">Resetar</button>
          </div>

          {children}

          <div className={styles.controlGroup}>
            <div className={styles.controlLabelRow}>
              <span>Perspectiva</span>
              <span className={styles.controlValue} aria-label={`Horizontal ${view.x} graus, vertical ${view.y} graus`}>
                {view.x}° H / {view.y}° V
              </span>
            </div>
            <p className={styles.perspectiveName}>{describeView(view)} · rotação livre</p>
            <div
              ref={orbitRef}
              className={styles.orbitControl}
              role="application"
              aria-label="Rotação livre de 360 graus. Arraste o círculo ou use as setas do teclado para girar os livros."
              onPointerDown={(event) => {
                if (event.button !== 0) return;
                orbitDrag.current = { x: event.clientX, y: event.clientY, view };
                event.currentTarget.setPointerCapture(event.pointerId);
              }}
              onPointerMove={(event) => {
                updateViewFromPointer(event.clientX, event.clientY);
              }}
              onPointerUp={() => { orbitDrag.current = null; }}
              onPointerCancel={() => { orbitDrag.current = null; }}
              onLostPointerCapture={() => { orbitDrag.current = null; }}
              onKeyDown={(event) => {
                if (!event.key.startsWith("Arrow")) return;
                event.preventDefault();
                const amount = event.shiftKey ? 15 : 2;
                if (event.key === "ArrowLeft") onViewChange({ ...view, x: view.x - amount });
                if (event.key === "ArrowRight") onViewChange({ ...view, x: view.x + amount });
                if (event.key === "ArrowUp") onViewChange({ ...view, y: view.y - amount });
                if (event.key === "ArrowDown") onViewChange({ ...view, y: view.y + amount });
              }}
              tabIndex={0}
            >
              <span className={styles.orbitRing} />
              <span className={styles.orbitCrosshair} />
              <span className={styles.orbitHandle} style={{ left: `${50 + Math.sin(yaw) * 34}%`, top: `${50 + Math.sin(pitch) * 34}%` }} />
            </div>
            <p className={styles.controlHint}>Gire 360° em qualquer direção</p>
            <div className={styles.angleInputs}>
              <label>
                <span>Horizontal</span>
                <input type="number" step="1" aria-label="Rotação horizontal em graus" value={view.x} onChange={(event) => {
                  const x = Number(event.target.value);
                  if (Number.isFinite(x)) onViewChange({ ...view, x });
                }} />
              </label>
              <label>
                <span>Vertical</span>
                <input type="number" step="1" aria-label="Rotação vertical em graus" value={view.y} onChange={(event) => {
                  const y = Number(event.target.value);
                  if (Number.isFinite(y)) onViewChange({ ...view, y });
                }} />
              </label>
            </div>
            <div className={styles.viewPresets} aria-label="Vistas do livro">
              {VIEW_PRESETS.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  aria-pressed={wrapAngle(view.x - preset.x) === 0 && wrapAngle(view.y - preset.y) === 0}
                  onClick={() => onViewChange({ x: nearestAngle(view.x, preset.x), y: nearestAngle(view.y, preset.y) })}
                >{preset.name}</button>
              ))}
            </div>
          </div>

          <label className={styles.rangeLabel}>
            <span className={styles.controlLabelRow}><span>Espaço entre livros</span><span className={styles.controlValue}>{Math.round(spacing)}px</span></span>
            <input type="range" min="8" max="48" step="1" value={spacing} onChange={(event) => onSpacingChange(Number(event.target.value))} />
          </label>

          <label className={styles.rangeLabel}>
            <span className={styles.controlLabelRow}><span>Tamanho</span><span className={styles.controlValue}>{Math.round(size * 100)}%</span></span>
            <input type="range" min="0.65" max="1.2" step="0.01" value={size} onChange={(event) => onSizeChange(Number(event.target.value))} />
          </label>
          <p className={styles.dragHint}>Role para avançar ou voltar. Segure e arraste com o mouse para mudar a perspectiva.</p>
        </div>
      </details>
    </aside>
  );
}
