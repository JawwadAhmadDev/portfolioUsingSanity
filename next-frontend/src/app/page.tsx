import { createClient } from "next-sanity";
import PortableText from "react-portable-text";

export default async function Home() {
  const blogs = await fetchData();
  console.log("blogs", blogs);
  return (
    <main>
      <div>Hello world</div>
      <div>
        <PortableText
          // Pass in block content straight from Sanity.io
          content={blogs[0].content}
          projectId="w8764j6a"
          dataset="production"
          // Optionally override marks, decorators, blocks, etc. in a flat
          // structure without doing any gymnastics
          serializers={{
            h1: (blogs: any) => <h1 style={{ color: "red" }} {...blogs} />,
            li: ({ children }: any) => (
              <li className="special-list-item">{children}</li>
            ),
          }}
        />
      </div>
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
