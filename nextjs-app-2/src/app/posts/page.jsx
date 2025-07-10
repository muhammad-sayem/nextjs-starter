import Link from "next/link";

const getPosts = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  return data;
}

const Posts = async() => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <h2> All Posts: {posts.length} </h2>

      <div className="grid grid-cols-4 gap-x-4 gap-y-2">
        {
          posts.map(post => {
            return <div key={post.id} className="border border-green-500 mb-4 px-6 py-2">
              <p className="text-2xl text-red-500 font-bold"> {post.title} </p>
              <p className="mb-4"> {post.body} </p>
              <p className="mb-2"> <Link className="btn bg-amber-400 p-3 rounded-lg" href={`/posts/${post.id}`}> See Details </Link> </p>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Posts;