import React from 'react';
import BlogCards from '../components/BlogCards';
// import { getBlogs } from '@/utils/fetchBlog';
import { blogs } from '@/models/Blogs';

const Page = async () => {
    // const data = await getBlogs();
    const data = blogs;
    return (
        <>
            {/* <BlogCards  data={data} /> */}
            <BlogCards  data={data} />
        </>
    );
};

export default Page;