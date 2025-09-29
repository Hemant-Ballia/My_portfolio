// src/app/api/live-blog/route.ts
import { blogPosts } from '@/data/blogPosts';

export async function GET() {
  return Response.json(blogPosts);
}
