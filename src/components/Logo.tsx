import { useNavigate } from "react-router-dom";

export function Logo({ color }: { color: string }) {

  const navigate = useNavigate()

  return (
    <div className={`flex-none font-itim text-5xl py-3 text-${color}`} onClick={() => navigate(-1)}>
      <span className="hidden md:inline">Taxco.</span>
      <span className="md:hidden">T.</span>
    </div>
  );
}
