import React, { forwardRef } from "react";

function MediaControls({ playing }, ref) {
  return (
    <div className="media">
      <i className="fa fa-backward"/>
      {playing ? (
        <i
          className="fa fa-pause"
          onClick={() => ref.current.pause()} />
      ) : (
        <i
          className="fa fa-play" onClick={() => ref.current.play()}/>
        )}
      <i className="fa fa-forward"/>
    </div>
  );
}

export default forwardRef(MediaControls);