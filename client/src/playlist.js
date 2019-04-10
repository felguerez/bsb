import * as PropTypes from "prop-types";
import React from "react";

function Playlist({ tracks, setCurrentTrack, currentTrackIndex }) {
  if (!tracks.length) return null;
  return(
    <ul className="tracklist">{tracks.map((track, i) => (
      <li
        key={`${track.title}-${i}`}
        className={`track${currentTrackIndex === i ? ' active' : ''}`}
      >
        <span
          href='#'
          onClick={() => setCurrentTrack(i)}
          className="title"
        >
          {track.title}
        </span>
      </li>
      ))}
    </ul>
  );
}

Playlist.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.any),
  setCurrentTrack: PropTypes.func
};

export default Playlist;