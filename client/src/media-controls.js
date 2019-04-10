import React, { forwardRef } from "react";

function MediaControls({ playing, setCurrentTrack, tracks }, ref) {

  const goBack = () => setCurrentTrack(track => !track ? tracks.length - 1: track - 1);
  const goForward = () => setCurrentTrack(track => track >= tracks.length - 1 ? 0 : track + 1);
  const togglePlayer = (action) => () => ref.current[action]();

  return (
    <div className="media">
      <i
        className="fa fa-backward"
        onClick={goBack}
      />
      <i
        className={`fa fa-${playing ? 'pause' : 'play'}`}
        onClick={togglePlayer(playing ? 'pause' : 'play')}
      />
      <i
        className="fa fa-forward"
        onClick={goForward}
      />
    </div>
  );
}

export default forwardRef(MediaControls);