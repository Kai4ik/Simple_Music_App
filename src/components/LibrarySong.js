import React from "react";
import styled from "styled-components";
import { checkIsPlaying } from "./functionality";

const SongSection = styled.section`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  cursor: pointer;
  &:hover {
    background: rgb(222, 222, 255);
  }
  background-color: ${(props) => props.active || "white"};
`;

const SongCover = styled.img`
  width: 30%;
`;

const SongDescription = styled.section`
  padding-left: 1rem;
`;

const SongName = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: #554f4d;
`;

const SongArtist = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  color: #554f4d;
`;

export default function LibrarySong({
  song,
  currentSong,
  setCurrentSong,
  setIsPlaying,
  isPlaying,
  audioRef,
}) {
  const songSelectorHandler = () => {
    song.id !== currentSong.id && setCurrentSong(song);
    checkIsPlaying(isPlaying, audioRef);
  };

  return (
    <SongSection
      onClick={songSelectorHandler}
      active={song.id === currentSong.id ? "rgb(165,181,228)" : null}
    >
      <SongCover src={song.cover} alt="song cover" />
      <SongDescription>
        <SongName> {song.name} </SongName>
        <SongArtist> {song.artist}</SongArtist>
      </SongDescription>
    </SongSection>
  );
}
