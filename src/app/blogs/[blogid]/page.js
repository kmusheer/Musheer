import Image from 'next/image';
import React from 'react';
import BlogCard from '@/app/components/BlogCard';
import { getBlog, getBlogs } from '@/utils/fetchBlog';
import { notFound } from 'next/navigation';


const Page = async ({ params }) => {
  let singleData = null;

  try {
    singleData = await getBlog(params.blogid);
  } catch (err) {
    console.error("Error in getBlog:", err);
    notFound(); // Shows 404 page if blog not found or fetch fails
  }
  if (!singleData) {
    notFound(); // Handle cases where API returns no blog
  }
  // console.log('params', params.blogid)
  const data = await getBlogs();

  const shuffledData = [...data].sort(() => 0.5 - Math.random());
  // Select a limited number of random blog posts (e.g., 3)
  const randomBlogs = shuffledData.slice(0, 3);

  return (
    <>
      <BlogCard randomBlogs={randomBlogs} singleData={singleData} />
    </>
  );
};

export default Page;