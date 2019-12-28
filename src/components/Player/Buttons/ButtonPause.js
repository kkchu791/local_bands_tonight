import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import PlayerService from "../../../models/PlayerService";

export const ButtonPause = (props) => {
  return (
     <button
        className=""
        onClick={() => PlayerService.pause()}
      >
        <FontAwesomeIcon
          icon={faPauseCircle}
          aria-hidden="true"
          size="lg"
        />
    </button>
  );
}


export default ButtonPause;