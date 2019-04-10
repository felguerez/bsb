import React from "react";

export default function Player({ track }) {
  return (
    <div className="player">
      <h4><marquee>Now playing {track.title}</marquee></h4>
      <video poster={track.imageUrl} className="video" controls src={track.mediaUrl}>
      </video>
    </div>
  )
};