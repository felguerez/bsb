import * as PropTypes from "prop-types";
import React from "react";

export function Playlist({tracks, setCurrentTrack}) {
  return <>{tracks.map((track, i) => (
    <li key={`${track.title}-${i}`}>
      <a
        href='#'
        onClick={() => setCurrentTrack(track)}
        className="track"
      >
        {track.title}
      </a>
    </li>
  ))}</>;
}

Playlist.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.any),
  setCurrentTrack: PropTypes.func
};