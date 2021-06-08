import React from "react";
import styled from "styled-components";
import LibrarySong from "./LibrarySong";

const LibrarySection = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  width: 30rem;
  height: 100%;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  overflow: scroll;
  transform: translateX(${(props) => props.transformation});
  transition: all 0.3s ease;
  opacity: ${(props) => props.visibility};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const LibraryTitle = styled.h2`
  padding-left: 2rem;
  font-size: 2rem;
  color: #554f4d;
  @media screen and (max-width: 768px) {
    margin-bottom: 1.2rem;
    opacity: 0;
  }
`;

const SongsContainer = styled.div``;

export default function Library({
  songs,
  currentSong,
  setCurrentSong,
  setIsPlaying,
  menuStatus,
  isPlaying,
  audioRef,
}) {
  return (
    <LibrarySection
      transformation={menuStatus ? "0%" : "-100%"}
      visibility={menuStatus ? "1" : "0"}
    >
      <LibraryTitle> Library</LibraryTitle>
      <SongsContainer>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            key={song.id}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
          />
        ))}
      </SongsContainer>
    </LibrarySection>
  );
}
