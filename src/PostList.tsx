import Post from "./Post";
interface Props {
  posts: Array<string>;
}

function PostList({ posts }: Props) {
  return (
    <div className="posts-list">
      {posts.map((post) => (
        <Post postBody={post} />
      ))}
    </div>
  );
}

export default PostList;
