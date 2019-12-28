import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import PlayerService from "../../../models/PlayerService";

export const ButtonPlay = (props) => {
  const player = window.player

  return (
    <button
      className=""
      onClick={() => PlayerService.play()}
    >
      <FontAwesomeIcon
        icon={faPlayCircle}
        aria-hidden="true"
        size="lg"
      />
    </button>
  );
};


export default ButtonPlay;