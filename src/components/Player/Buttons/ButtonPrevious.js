import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import PlayerService from "../../../models/PlayerService";

export const ButtonPrevious = (props) => {
  return (
    <button
      className=""
      onClick={() => PlayerService.playPrevious()}
    >
      <FontAwesomeIcon
        icon={faStepBackward}
        aria-hidden="true"
        size="lg"
      />
    </button>
  );
};


export default ButtonPrevious;