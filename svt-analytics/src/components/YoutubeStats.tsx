import React from "react";

export default function YoutubeStats({
  title,
  viewCount,
  likeCount,
}: {
  title: string[];
  viewCount: string[];
  likeCount: string[];
}) {
  return (
    <div className="YoutubeStats">
      {title.map((x) => (
        <div className="Title">title {x}</div>
      ))}
      {viewCount.map((x) => (
        <div className="viewCount">viewCount {x}</div>
      ))}
      {likeCount.map((x) => (
        <div className="likeCount">likeCount {x}</div>
      ))}
      <div>Title: {title[21]}</div>
      <div>View Count: {viewCount[4]}</div>
      <div>Like Count: {likeCount[4]}</div>
    </div>
  );
}
