import React from 'react';
import BlogCards from '../components/BlogCards';
import { getBlogs } from '@/utils/fetchBlog';

const Page = async () => {
    const data = await getBlogs();

    return (
        <>
            <BlogCards  data={data} />
        </>
    );
};

export default Page;