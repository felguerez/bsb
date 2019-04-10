import React from "react";

export default function Player({ track, onEnded }) {
  console.log(track);
  return (
    <div className="player">
      <h4><marquee>Now playing {track.title}</marquee></h4>
      <video
        poster={track.imageUrl}
        className="video"
        controls src={track.mediaUrl}
        onEnded={onEnded}
      />
    </div>
  )
};