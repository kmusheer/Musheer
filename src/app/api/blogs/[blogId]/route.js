// import { blogs } from "@/utils/staticDbBlog";
import { blogs } from '@/models/Blogs';
import { NextResponse } from "next/server";

export function GET(request, {params}){

    // console.log('params', params)

    const data = blogs.filter((item) => item.id == params.blogId)
    return NextResponse.json(data.length === 0 ? {result : "data not found", success : false}: {result : data[0], success : true}, {status : 200})
}