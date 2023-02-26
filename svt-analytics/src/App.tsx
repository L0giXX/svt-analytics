import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const URL = "https://youtube.googleapis.com/youtube/v3/videos";
  const part = "snippet,statistics";
  const id = "gRnuFC4Ualw";
  const key = "AIzaSyDxjXl_9OufJk-uEM6uwJZ6I6Rjv-cRCLU";

  const [data, setData] = useState({});

  const apiHandler = async () => {
    let url = URL + "&part=" + part + "&id=" + id + "&key" + key;
    const res = await fetch(url, {
      method: "GET",
    });
    const data = await res.json();
    setData(data);
  };
  return (
    <div className="App">
      <h1>Seventeen Analytics</h1>
      <button onClick={apiHandler}>Output</button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
