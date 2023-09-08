// import { useState } from "react";
import Navbar from "./Navbar";
import MainHeader from "./MainHeader";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid">
        <Navbar />
        <main className="main-section">
          <MainHeader />
        </main>
      </div>
    </>
  );
}

export default App;
