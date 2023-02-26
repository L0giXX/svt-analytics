import { useState } from "react";
import "./App.css";
import YoutubeAPI from "./components/YoutubeAPI";

function App() {
  const [title, setTitle] = useState([]);
  const [viewCount, setViewCount] = useState([]);
  const [likeCount, setLikeCount] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Seventeen Analytics</h1>
      </header>
      <YoutubeAPI
        title={title}
        setTitle={setTitle}
        viewCount={viewCount}
        setViewCount={setViewCount}
        likeCount={likeCount}
        setLikeCount={setLikeCount}
      />
    </div>
  );
}

export default App;
