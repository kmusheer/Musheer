export const getBlogs = async () => {
  const URL = process.env.API_URL;
  try {
    let response = await fetch(URL);
    if (response.status === 404) {
      console.warn("Resource not found:", URL);
      return null; // Return null or handle the error in a way that makes sense for your application.
    }
    if (!response.ok) {
      throw new Error(`Fetch failed with status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it higher up in your code.
  }
};


export const getBlog = async (id) => {
  const BLOG_API_URL = process.env.BLOG_API_URL;
  const URL = `${BLOG_API_URL}/${id}`;
  try {
    let data = await fetch(URL);
    if (!data.ok) {
      throw new Error(`Fetch failed with status: ${data.status}`);
    }
    if (data.status === 404) {
      return null;
    }
    data = await data.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};