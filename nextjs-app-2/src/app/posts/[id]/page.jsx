const getSinglePost = async(post_id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
  const data = await res.json();
  return data
}

const SinglePostDetails = async({params}) => {
  const p = await params;
  const singlePost = await getSinglePost(p.id);
  console.log(singlePost);
  return (
    <div>
      <p> Single Post ID: <span className="text-xl font-bold text-red-500"> {p.id} </span> </p>
      <p className="text-green-500 font-bold"> Title: {singlePost.title} </p>
      <p> {singlePost.body} </p>
    </div>
  );
};

export default SinglePostDetails;