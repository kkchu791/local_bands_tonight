import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { stations } from "../../utils/Stations";

const useStyles = makeStyles(theme => ({
  stationText: {
    padding: "20px 0"
  },
  stationCard: {
    color: "black",
    textDecoration: "none"
  }
}));

export const StationList = ({ handleStationClick }) => {
  const classes = useStyles();

  return (
    <div className="stations-page">
      <Typography variant="h2">Stations</Typography>

      {stations.map((station, index) => (
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
      ))}
    </div>
  );
};
export default StationList;
