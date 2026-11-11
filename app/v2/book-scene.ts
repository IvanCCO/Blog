const palette = [
  { color: "blue" },
  { color: "rose" },
  { color: "sage" },
  { color: "lilac" },
] as const;

export const BOOKS = Array.from({ length: 22 }, (_, index) => ({
  year: index + 1,
  ...palette[index % palette.length],
}));

export type LifeBook = (typeof BOOKS)[number];
export type BookState = "active" | "upcoming" | "passed";
export type ViewPoint = { x: number; y: number };
export type SceneSettings = { view: ViewPoint; spacing: number; size: number };

export const DEFAULT_SETTINGS: SceneSettings = {
  view: { x: 0, y: 0 },
  spacing: 24,
  size: 1,
};
export const STORAGE_KEY = "v2-book-scene-settings";

export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const wrapAngle = (angle: number) => ((angle % 360) + 360) % 360;

export function nearestAngle(from: number, to: number) {
  const delta = wrapAngle(to - from);
  return from + (delta > 180 ? delta - 360 : delta);
}

export function describeView(view: ViewPoint) {
  const yaw = wrapAngle(view.x) * Math.PI / 180;
  const pitch = wrapAngle(view.y) * Math.PI / 180;
  const front = Math.cos(yaw) * Math.cos(pitch);
  const side = Math.sin(yaw) * Math.cos(pitch);
  const vertical = Math.sin(pitch);
  const faces = [
    { name: "Capa", facing: front },
    { name: "Contracapa", facing: -front },
    { name: "Lombada", facing: side },
    { name: "Páginas", facing: -side },
    { name: "Topo", facing: -vertical },
    { name: "Base", facing: vertical },
  ];
  return faces.reduce((nearest, face) => face.facing > nearest.facing ? face : nearest).name;
}

export function readSceneSettings(value: string | null): SceneSettings {
  if (!value) return DEFAULT_SETTINGS;
  try {
    const saved = JSON.parse(value) as (Partial<SceneSettings> & { version?: number }) | null;
    const finite = (number: unknown, fallback: number) =>
      typeof number === "number" && Number.isFinite(number) ? number : fallback;
    const legacy = saved?.version !== 2;
    const storedSpacing = finite(saved?.spacing, legacy ? 12 : DEFAULT_SETTINGS.spacing);
    const spacing = legacy ? (storedSpacing > 60 ? storedSpacing / 15 : storedSpacing) * 2 : storedSpacing;
    return {
      view: {
        x: finite(saved?.view?.x, 0),
        y: finite(saved?.view?.y, 0),
      },
      // Preserve the old composition while separating the solid books in depth.
      spacing: clamp(spacing, 8, 48),
      size: clamp(finite(saved?.size, 1), 0.65, 1.2),
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function getBookPose(
  index: number,
  progress: number,
  spacing: number,
  size: number,
  reducedMotion: boolean,
) {
  const position = clamp(progress, 0, BOOKS.length - 1);
  // Under reduced motion, change slots only after the outgoing face has faded.
  const depth = Math.max(0, index - (reducedMotion ? Math.floor(position + 0.15) : position));
  const exit = clamp(position - index, 0, 1);
  const fall = reducedMotion ? 0 : exit;
  const front = 1 - clamp(depth, 0, 1);
  const scale = size * Math.max(0.66, 1 - depth * 0.016) * (1 - fall * 0.025);
  const round = (value: number) => Math.round(value * 1000) / 1000;

  return {
    // Each book is 36px thick; a 44px depth step prevents the faces intersecting.
    transform: `translate3d(calc(-50% + ${round(depth * spacing)}px), calc(${round(fall * 115)}% - ${round(depth)}px), ${round(front * 20 - depth * 44 + fall * 45)}px) rotateY(${round(-13 + front * 7)}deg) rotateX(${round(6 - front * 4 + fall * 8)}deg) rotateZ(${round(-1 + front - fall * 2)}deg) scale(${round(scale)})`,
    opacity: 1 - clamp(exit / 0.85, 0, 1),
  };
}
