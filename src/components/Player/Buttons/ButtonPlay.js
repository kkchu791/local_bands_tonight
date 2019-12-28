import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import PlayerService from "../../../models/PlayerService";

export const ButtonPlay = (props) => {
  const [pausedStatus, setPausedStatus] = useState(false)

  const handlePlayClick = () => {
    PlayerService.play();
    setPausedStatus(!pausedStatus);
  }

  return (
     <button
        className=""
        onClick={() => handlePlayClick()}
      >
        <FontAwesomeIcon
          icon={pausedStatus ? faPauseCircle : faPlayCircle}
          aria-hidden="true"
          size="lg"
        />
    </button>
  );
}


export default ButtonPlay;