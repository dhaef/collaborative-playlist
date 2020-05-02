import React, { useState, useEffect } from 'react';
import './App.css';

import Artists from './components/Artists';
import Playlist from './components/Playlist';

const App = () => {
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [songsInFocus, setSongsInFocus] = useState([]);
  
  const setSongs = (songs) => {
    console.log(songs);
    setSongsInFocus(songs);
  }

  const addSong = () => {
    setPlaylistSongs(songsInFocus);
  }

  return (
    <div className="App row">
      <Artists setSongs={setSongs} />
      <button onClick={addSong}>--></button>
      <Playlist songs={playlistSongs} />
    </div>
  );
}

export default App;
