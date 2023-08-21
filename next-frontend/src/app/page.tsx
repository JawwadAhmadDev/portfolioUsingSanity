import { createClient } from "next-sanity";

export default async function Home() {
  const blogs = await fetchData();
  console.log("blogs", blogs);
  return (
    <main>
      <div>Hello world</div>
    </main>
  );
}

const client = createClient({
  projectId: "w8764j6a",
  dataset: "production",
  apiVersion: "v2021-10-21",
  useCdn: false,
});
export async function fetchData() {
  try {
    const blogs = await client.fetch(`*[_type == "blog"]`);
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      blogs: [], // Return an empty array or some default value.
    };
  }
}
