import React, {useEffect, useState} from 'react';
import axios from "axios";
import Player from "./player";

import './App.css';
import {Playlist} from "./playlist";

function App (props) {
  const [tracks, setTracks] = useState([{}]);
  const [currentTrack, setCurrentTrack] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const result = await axios("/bsb.json");
      setTracks(result.data.tracks);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h3 className="full">Greatest Hits : ^)</h3>
      <ul className="tracklist">
        <Playlist tracks={tracks} setCurrentTrack={setCurrentTrack} />
      </ul>
      <Player
        track={tracks[currentTrack]}
        onEnded={() => {
          setTracks(tracks => tracks.filter(t => (t.title !== tracks[currentTrack].title)));
          setCurrentTrack(track => track >= tracks.length - 1 ? 0 : track++);
        }}
      />
    </div>
  );
}

export default App;
