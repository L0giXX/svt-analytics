import { useState } from "react";
import "./App.css";

function App() {
  const KEY = import.meta.env.VITE_KEY;
  const id = "gRnuFC4Ualw";
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [viewCount, setViewCount] = useState("");
  const [likeCount, setLikeCount] = useState("");
  const apiHandler = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setViewCount(data["items"][0].statistics.viewCount);
        setLikeCount(data["items"][0].statistics.likeCount);
        setTitle(data["items"][0].snippet.title);
      });
  };
  return (
    <div className="App">
      <h1>Seventeen Analytics</h1>
      <button onClick={apiHandler}>Output</button>
      <div>Title: {title}</div>
      <div>View Count: {viewCount}</div>
      <div>Like Count: {likeCount}</div>
    </div>
  );
}

export default App;
