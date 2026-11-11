import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@vercel/global-config';

export const config = {
  matcher: ['/api/posts', '/api/world'], // Define both matchers
};

export async function proxy(req : NextRequest) {
  const url = req.nextUrl.pathname;
  const { get } = createClient(process.env.GLOBAL_CONFIG ?? process.env.EDGE_CONFIG);

  if (url === '/api/posts') {
    const posts = await get('posts');
    return NextResponse.json(posts);
  }

  if (url === '/api/world') {
    const world = await get('world');
    return NextResponse.json(world);
  }

  return NextResponse.next(); 
}
