import { useState } from "react";
import Navbar from "./Navbar";
import MainHeader from "./MainHeader";
import PostInput from "./PostInput";
import PostList from "./PostList";
import "./App.css";

function App() {
  const [posts, setPosts] = useState<Array<string>>([]);

  return (
    <>
      <div className="grid">
        <Navbar />
        <main className="main-section">
          <MainHeader />
          <PostInput onPost={setPosts} />
          <PostList posts={posts} />
        </main>
      </div>
    </>
  );
}

export default App;
