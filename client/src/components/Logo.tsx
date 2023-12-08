
export function Logo({ color }: { color: string }) {
  return (
    <div className={`flex-none font-itim text-5xl py-3 text-${color}`}>
      <span className="hidden md:inline">Taxco.</span>
      <span className="md:hidden">T.</span>
    </div>
  );
}
