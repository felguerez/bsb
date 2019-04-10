import React, { forwardRef } from "react";

const Player = forwardRef(({ track, onEnded, togglePlaying }, ref) => {
  return (
    <div className="player">
      <h4><marquee>Now playing {track.title}</marquee></h4>
      <video
        ref={ref}
        poster={track.imageUrl}
        className={track.title ? "video active" : "video"}
        controls src={track.mediaUrl}
        onEnded={onEnded}
        onPause={togglePlaying}
        onPlay={togglePlaying}
        autoPlay
      />
    </div>
  )
});

export default Player;