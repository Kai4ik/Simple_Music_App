import React from "react";
import styled from "styled-components";

const SongSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  @media screen and (max-width: 768px) {
  }
`;

const SongCover = styled.img`
  border-radius: 50%;
  width: 20%;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

const SongName = styled.h3`
  font-size: 2.2rem;
  padding: 3rem 1rem 1rem 1rem;
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    padding: 1.2rem 1rem 0.4rem 1rem;
  }
`;

const SongArtist = styled.h3`
  font-size: 1.5rem;
  color: #554f4d;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function Song({ currentSong }) {
  return (
    <SongSection>
      <SongCover src={currentSong.cover} alt="song cover" />
      <SongName> {currentSong.name} </SongName>
      <SongArtist> {currentSong.artist}</SongArtist>
    </SongSection>
  );
}
