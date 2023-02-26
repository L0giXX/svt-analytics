import React, { useEffect, useState } from "react";
import raw from "../assets/title_tracks_id.txt";
export default function YoutubeAPI({
  title,
  setTitle,
  viewCount,
  setViewCount,
  likeCount,
  setLikeCount,
}: {
  title: any;
  setTitle: any;
  viewCount: any;
  setViewCount: any;
  likeCount: any;
  setLikeCount: any;
}) {
  const [testID, setID] = useState("");
  useEffect(() => {
    apiHandler();
  }, []);

  const KEY = import.meta.env.VITE_KEY;
  var temp = [];
  const apiHandler = () => {
    let promises = fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        return (temp = text.split("\r\n"));
      })
      .then((arr) => {
        for (const id of arr) {
          fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${KEY}`
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setViewCount(data["items"][0].statistics.viewCount);
              setLikeCount(data["items"][0].statistics.likeCount);
              setTitle(data["items"][0].snippet.title);
            });
        }
      });
  };
  return (
    <div className="YoutubeAPI">
      <div>Title: {title}</div>
      <div>View Count: {viewCount}</div>
      <div>Like Count: {likeCount}</div>
      <div>ID Index=2: {testID}</div>
    </div>
  );
}
