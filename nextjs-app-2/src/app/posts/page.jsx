import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export const metadata = {
  title: "All Posts",
  description: "Loading JSON Placeholder posts using server component",
};

const Posts = async () => {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div>
      <h2> Total Posts: {posts.length} </h2>

      <div className="grid grid-cols-4 gap-8">
        {
          posts.map(post => {
            return (
              <div key={post.id} className="border p-4">
                <p> Post ID: {post.id} </p>
                <p className="text-red-500 font-bold"> Post Title: {post.title} </p>
                <p> {post.body} </p>
                <button className="btn bg-sky-700 text-white px-4 py-2 rounded-xl mt-2">
                  <Link href={`/posts/${post.id}`}> Details </Link>
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Posts;