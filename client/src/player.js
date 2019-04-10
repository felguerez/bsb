import React from "react";

export default function Player({ track }) {
  console.log(track);
  return (
    <div className="player">
      <h4><marquee behavior="" direction="">Now playing {track.title}</marquee></h4>
      <video poster={track.imageUrl} className="video" controls src={track.mediaUrl}>
      </video>
    </div>
  )
};