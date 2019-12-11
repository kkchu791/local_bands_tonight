import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {stations} from '../utils/Stations'
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  stationText: {
    padding: "20px 0"
  },
  stationCard: {
    color: 'black',
    textDecoration: "none",
  }
}));


const StationList = ({
  handleStationClick,
}) => {
  const classes = useStyles();

    return (
    <div className="stations-page">
      <Typography variant="h2">
        Stations
      </Typography>

      {stations.map((station, index) => {
        return (
          <Link
            to="/songs"
            className={classes.stationCard}
            onClick={() => handleStationClick(station)}
            key={index}
          >
            <Typography variant="h5" className={classes.stationText}>
              {station}
            </Typography>
            <hr />
          </Link>
        )
      })}

    </div>
  );
}
export default StationList;
