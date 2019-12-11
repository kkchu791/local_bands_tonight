import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SongService from '../models/SongService';
import SongCard from '../components/SongCard';

const useStyles = makeStyles(theme => ({
  songTitle: {
    fontSize: '24px',
  }
}));

const SongList = ({
  playSong
}) => {
  const classes = useStyles();

    return (
    <div className="songs-page">
      <Typography variant="h2" className={classes.songTitle}>
        Songs
      </Typography>

      {SongService.getAll().map((song, index) => {
        return (
          <SongCard
            song={song}
            key={index}
            playSong={playSong}
          />
        )
      })}
    </div>
  );
}
export default SongList;
