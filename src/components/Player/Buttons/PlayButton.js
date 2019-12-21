import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export const PlayButton = ({ playSong, currentSong }) => (
  <div className="play-button" onClick={() => playSong(currentSong)}>
    <FontAwesomeIcon icon={faPlayCircle} aria-hidden="true" />
  </div>
);

export default PlayButton;
