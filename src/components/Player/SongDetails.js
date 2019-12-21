import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArtistService from "../../models/ArtistService";
import { ButtonBar } from "./ButtonBar";

export const SongDetails = ({ match, currentSong }) => {
  const [event, setEvent] = useState({});

  useEffect(() => {
    setEvent(ArtistService.getEvent(match.params.artist_id));
  }, [match.params.artist_id]);

  return (
    <div className="event-details">
      <div className="event-artist">
        <Typography variant="h4">{event.artist}</Typography>
      </div>

      <div className="event-date-time">
        {new Date(event.starts_at).toDateString()} •}
      </div>

      <div className="event-location">{event.venue}</div>

      <div className="event-price">
        Selling fast from $66.50 at Ticketmaster
      </div>

      <div className="event-buy-ticket-button">
        <Button variant="outlined" href={event.ticket_url}>
          Find Tickets
        </Button>
      </div>

      <ButtonBar currentSong={currentSong} />
    </div>
  );
};
export default SongDetails;
