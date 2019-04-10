import './App.css';

import React, { useEffect, useState, createRef } from 'react';
import axios from "axios";
import Player from "./player";
import Playlist from "./playlist";
import MediaControls from "./media-controls";

function App (props) {

  const [tracks, setTracks] = useState([{}]);
  const [playing, togglePlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrack] = useState(0);
  const ref = createRef();

  useEffect(() => {
    async function fetchData() {
      const result = await axios("/bsb.json");
      setTracks(result.data.tracks);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <p className="full center">If you enjoy these hits please follow BSB on <a
        href="https://www.facebook.com/backstreetboys/"
        target="_blank">
        Facebook
      </a>.
        <a
          href="https://open.spotify.com/album/02FX4aLHDNacfV4bMnO9Kv"
          target="_blank">
          New album - DNA - out now!
        </a>
      </p>
      <div className="App-controls">
        <MediaControls playing={playing} ref={ref}  />
        <Playlist
          tracks={tracks}
          setCurrentTrack={setCurrentTrack}
          currentTrackIndex={currentTrackIndex}
        />
      </div>
      <Player
        ref={ref}
        track={tracks[currentTrackIndex]}
        togglePlaying={() => togglePlaying(playing => !playing)}
        onEnded={() => {
          setTracks(tracks => tracks.filter(t => (t.title !== tracks[currentTrackIndex].title)));
          setCurrentTrack(track => track >= tracks.length - 1 ? 0 : track++);
        }}
      />
    </div>
  );
}

export default App;
