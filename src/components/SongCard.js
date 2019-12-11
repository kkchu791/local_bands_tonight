import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    margin: "30px",
    textAlign: "left",
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

const SongCard = ({
  song,
  index,
  playSong,
}) => {
  const classes = useStyles();
  return (
    <Card
      key={index}
      onClick={() => playSong(song)}
      className={classes.card}
    >
      <CardMedia
        className={classes.cover}
        image={song.album.images[0].url}
        title="song-image"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {song.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {song.artists[0].name}
          </Typography>
        </CardContent>
      </div>

      <div className={classes.nextButton}>
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => console.log("show page")}
          aria-hidden="true"
        />
      </div>
    </Card>

  );
}
export default SongCard;
