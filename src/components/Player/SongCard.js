import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    margin: "30px",
    textAlign: "left"
  },
  cover: {
    width: 151
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  nextButton: {
    marginLeft: "auto",
    order: "2",
    alignSelf: "center",
    fontSize: "24px"
  }
}));

export const SongCard = ({ song, index, playSong, handleSongDetailsClick }) => {
  const classes = useStyles();
  return (
    <Card key={index} onClick={() => playSong(song)} className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={song.album_url}
        title="song-image"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {song.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {song.artist}
          </Typography>
        </CardContent>
      </div>

      <Link
        to={`/song_details/${song.artist_id}`}
        onClick={() => handleSongDetailsClick(song)}
        key={index}
        song={song}
      >
        <div className={classes.nextButton}>
          <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
        </div>
      </Link>
    </Card>
  );
};
export default SongCard;
