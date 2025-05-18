const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const getBlogs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs`, {
      cache: "no-store",
    });

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
  try {
    const response = await fetch(`${BASE_URL}/api/blogs/${id}`, {
      cache: "no-store",
    });

    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`Fetch failed with status: ${response.status}`);

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};



// export const getBlogs = async () => {
//   try {
//     const response = await fetch(`/api/blogs`, {
//       cache: "no-store",
//     });

//     if (!response.ok) {
//       console.warn("Failed to fetch blogs:", response.status);
//       return null;
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//     return null;
//   }
// };

// export const getBlog = async (id) => {
//   try {
//     const response = await fetch(`/api/blogs/${id}`, {
//       cache: "no-store",
//     });

//     if (response.status === 404) return null;
//     if (!response.ok) throw new Error(`Fetch failed with status: ${response.status}`);

//     const data = await response.json();
//     return data.result;
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     return null;
//   }
// };
