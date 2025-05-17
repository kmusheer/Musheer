// fetchBlog.js
export const getBlogs = async () => {
  const URL = process.env.API_URL;

  if (!URL) {
    console.error("API_URL not defined");
    return null;
  }

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      console.warn("Failed to fetch blogs:", response.status);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }
};

export const getBlog = async (id) => {
  const BASE_URL = process.env.BLOG_API_URL;

  if (!BASE_URL) {
    console.error("BLOG_API_URL not defined");
    return null;
  }

  const URL = `${BASE_URL}/${id}`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Fetch failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};
