import { NextRequest, NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = {
  matcher: ['/api/posts', '/api/world'], // Define both matchers
};

export async function middleware(req : NextRequest) {
  const url = req.nextUrl.pathname;

  if (url === '/api/posts') {
    const posts = await get('posts');
    console.log(posts);
    return NextResponse.json(posts);
  }

  if (url === '/api/world') {
    const world = await get('world');
    console.log(world);
    return NextResponse.json(world);
  }

  return NextResponse.next(); 
}
