import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState<string[]>([]);
  const [viewCount, setViewCount] = useState<string[]>([]);
  const [likeCount, setLikeCount] = useState<string[]>([]);
  useEffect(() => {
    apiHandler();
  }, []);

  const arr = new Array(
    "9rUFQJrCT7M",
    "9M7k9ZV67c0",
    "j59LLNMEOZk",
    "J-wFp43XOrA",
    "IzplmS-VeBc",
    "zEkg4GBQumc",
    "CyzEtbG-sxY",
    "gZItyr1SNjU",
    "BgR_HJ7aGDY",
    "_5PELxP8Udg",
    "R9VDPMk5ls0",
    "cA1b99JSQq0",
    "F9CrRG6j2SM",
    "ap14O5-G7UA",
    "u4iDL3c0T1c",
    "HdZdxocqzq4",
    "MmI-vsaOoUE",
    "UB4FzllQCyc",
    "yCvSR4lSqTg",
    "WpuatuzSDK4",
    "bTtNV6hgDno",
    "gRnuFC4Ualw",
    "VCDWg0ljbFQ"
  );

  const apiHandler = async () => {
    const titles = [];
    const views = [];
    const likes = [];
    const KEY = import.meta.env.VITE_KEY;
    for (let i = 0; i < arr.length; i++) {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${arr[i]}&key=${KEY}`
      );
      const data = await response.json();
      titles.push(data["items"][0].snippet.title);
      views.push(data["items"][0].statistics.viewCount);
      likes.push(data["items"][0].statistics.likeCount);
      setTitle([...title, ...titles]);
      setViewCount([...viewCount, ...views]);
      setLikeCount([...likeCount, ...likes]);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>SEVENTEEN Analytics</h1>
      </header>
      <div>Title: {title[3]}</div>
      <div>View Count: {viewCount[3]}</div>
      <div>Like Count: {likeCount[3]}</div>
    </div>
  );
}

export default App;
