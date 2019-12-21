import React from "react";

const Card = props => <div style={styles.containerStyle}>{props.children}</div>;

const styles = {
  containerStyle: {
    border: "1px solid #ddd",
    borderRadius: "2",
    borderBottomWidth: "0",
    shadowColor: "#000",
    shadowOffset: "{ width: 0, height: 2 }",
    shadowOpacity: "0.1",
    shadowRadius: "2",
    elevation: "1",
    margin: "10px 5px 0 5px"
  }
};

export default Card;
