import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { loginLink } from "../../utils/Constants";

const useStyles = makeStyles(theme => ({
  landingPageTitle: {
    marginTop: "40px"
  },
  logInButton: {
    marginTop: "150px"
  }
}));

export const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className="landing-page">
      <Typography variant="h2" className={classes.landingPageTitle}>
        Radio Days
      </Typography>

      <Button
        variant="outlined"
        className={classes.logInButton}
        href={loginLink}
      >
        Log in to Spotify
      </Button>
    </div>
  );
};
export default LandingPage;
