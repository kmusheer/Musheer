import { blogs } from "@/utils/staticDbBlog";
import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json(blogs , {status : 200})
}