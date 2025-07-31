export const getSinglePost = async (postId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }) {
  const { id } = params; 
  const singlePost = await getSinglePost(id);

  return {
    title: singlePost.title,
    description: singlePost.body
  };
}

const SinglePost = async ({ params }) => {
  const { id } = params; 
  const singlePost = await getSinglePost(id);

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold text-red-500"> Single Post No: {singlePost.id} </h2>
      <h2> Single Post Title: {singlePost.title} </h2>
      <p> {singlePost.body} </p>
    </div>
  );
};

export default SinglePost;
