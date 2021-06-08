import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { checkIsPlaying } from "./functionality";

const PlayerSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 20vh;
`;

const TimeControl = styled.div`
  display: flex;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Time = styled.p`
  padding: 1rem;
`;

const RangeInput = styled.input.attrs((props) => ({
  type: "range",
}))`
  width: 100%;
  padding: 1rem 0rem;
`;

const PlayControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export default function Player({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songs,
}) {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: null,
  });

  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const songTimeUpdateHandler = (e) => {
    setSongInfo({
      ...songInfo,
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const findCurrentSongIndex = () => {
    return songs.findIndex((song) => song.id === currentSong.id);
  };

  const skipSongHandler = (direction) => {
    direction === "skip-back"
      ? setCurrentSong(
          findCurrentSongIndex() === 0
            ? songs[songs.length - 1]
            : songs[(findCurrentSongIndex() - 1) % songs.length]
        )
      : setCurrentSong(songs[(findCurrentSongIndex() + 1) % songs.length]);
    checkIsPlaying(isPlaying, audioRef);
  };

  const songFinishHandler = async () => {
    await setCurrentSong(songs[(findCurrentSongIndex() + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  const formatTime = (time) =>
    Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

  return (
    <PlayerSection>
      <TimeControl>
        <Time>{formatTime(songInfo.currentTime)}</Time>
        <RangeInput
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <Time>
          {songInfo.duration ? formatTime(songInfo.duration) : "0:00"}
        </Time>
      </TimeControl>
      <PlayControl>
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipSongHandler("skip-back")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          size="2x"
          onClick={() => skipSongHandler("skip-forward")}
        />
      </PlayControl>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={songTimeUpdateHandler}
        onTimeUpdate={songTimeUpdateHandler}
        onEnded={songFinishHandler}
      ></audio>
    </PlayerSection>
  );
}
