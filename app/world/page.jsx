import World from "../article/[slug]/World";
import { world } from "./worldData";

export default function Page() {
  return <World locations={world.features} />;
}
