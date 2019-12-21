import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Player } from "./components/Player";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: "650px",
    overflowY: "auto",
    textAlign: "center"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Container fixed className={`${classes.root} App`}>
      <Player />
    </Container>
  );
};
export default App;
