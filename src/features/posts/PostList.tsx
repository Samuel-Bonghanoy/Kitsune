import Post from "./Post";
import { useState } from "react";

// interface Props {
//   posts: Array<string>;
// }

function PostList() {
  const [posts, setPosts] = useState<Array<string>>(["I hate JavaScript"]);

  return (
    <div className="posts-list">
      {posts.map((postItem) => (
        <Post postBody={postItem} />
      ))}
    </div>
  );
}

export default PostList;
