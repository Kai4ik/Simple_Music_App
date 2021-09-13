import React, { useState, useRef } from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import getSongs from "./db";

import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scrollbar-width: thin;
    scrollbar-color: rgba(155,155,155,0.6) transparent;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color:rgba(155,155,155,0.6);
    border-radius: 20px;
    border: transparent
  }

  body {
    color: #271F1F;
    font-family: "Oswald", sans-serif;
  }

  svg {
    cursor: pointer;
  }
`;

const Main = styled.div`
  transition: all 0.3s ease;
  margin-left: ${(props) => props.activeMenu};
`;

export default function App() {
  const songs = getSongs();
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);
  const audioRef = useRef(null);

  return (
    <Main activeMenu={menuStatus ? "20%" : "0%"}>
      <GlobalStyle />
      <Navigation setMenuStatus={setMenuStatus} menuStatus={menuStatus} />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        menuStatus={menuStatus}
        audioRef={audioRef}
      />
    </Main>
  );
}
