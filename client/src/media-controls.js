import React, { forwardRef } from "react";

function MediaControls({ playing, setCurrentTrack, tracks }, ref) {
  return (
    <div className="media">
      <i
        className="fa fa-backward"
        onClick={() => setCurrentTrack(track => !track ? tracks.length - 1: track - 1)}
      />
      {playing ? (
        <i
          className="fa fa-pause"
          onClick={() => ref.current.pause()} />
      ) : (
        <i
          className="fa fa-play" onClick={() => ref.current.play()}/>
        )}
      <i
        className="fa fa-forward"
        onClick={() => setCurrentTrack(track => track >= tracks.length - 1 ? 0 : track + 1)}
      />
    </div>
  );
}

export default forwardRef(MediaControls);