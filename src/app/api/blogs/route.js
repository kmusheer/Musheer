// import { blogs } from "@/utils/staticDbBlog";
// import { NextResponse } from "next/server";

// export function GET(request){
//     return NextResponse.json(blogs , {status : 200})
// }

import { blogs } from '@/models/Blogs';

export async function GET() {
  return Response.json(blogs);
}