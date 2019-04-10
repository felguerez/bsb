import React, { useState, useEffect } from 'react';
import axios from "axios";
import Player from "./player";

import './App.css';

function App (props) {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  useEffect(() => {
    async function fetchData() {
      const result = await axios("/bsb.json");
      setTracks(result.data.tracks);
      setCurrentTrack(result.data.tracks[0]);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h3 className="full">Greatest Hits : ^)</h3>
      <ul className="tracklist">
        {tracks.map((track, i) => (
          <li key={`${track.title}-${i}`}>
            <a
              href='#'
              onClick={() => setCurrentTrack(track)}
              className="track"
            >
              {track.title}
            </a>
          </li>
        ))}
      </ul>
      <Player track={currentTrack} />
    </div>
  );
}

export default App;
