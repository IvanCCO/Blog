import { getWorldLocationData } from "./cache";
import World from "./World";

export default async function Page() {
  const worldMarkers = await getWorldLocationData();

  return <World locations={worldMarkers} />;
}
