let locationCache: any[] | null = null;

export async function getWorldLocationData(id: string): Promise<any[]> {
  if (locationCache) {
    return locationCache;
  }

  const url = process.env.EDGE_CONFIG;

  const locations = await fetch(String(url))
    .then((res) => res.json())
    .then((r) => r.items.world.features);

  if (locations) {
    locationCache = locations;
  }

  return locations;
}
