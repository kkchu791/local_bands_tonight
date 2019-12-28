import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";
import PlayerService from "../../../models/PlayerService";

export const ButtonNext = (props) => {
  return (
    <button
      className=""
      onClick={() => PlayerService.playNext()}
    >
      <FontAwesomeIcon
        icon={faStepForward}
        aria-hidden="true"
        size="lg"
      />
    </button>
  );
};


export default ButtonNext;