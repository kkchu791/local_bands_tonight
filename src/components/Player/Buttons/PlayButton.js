import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export const PlayButton = () => {

  let player = window.player

  return (
    <div className="play-button" onClick={() => player.getCurrentState().paused ? player.resume() : player.pause()}>
      <FontAwesomeIcon icon={faPlayCircle} aria-hidden="true" />
    </div>
  );
}

export default PlayButton;
