import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
},
appBar: {
      backgroundColor: "#0A192F",
      color: "#50CCB5",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "monospace",
  },
  ul: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "flex-end",
},
li: {
    textAlign: "right",
    marginRight: 30,
    alignSelf: "baseline",
  },
  resume: {
      fontFamily: "monospace",
      fontSize: 20,
      backgroundColor: "#0A192F",
      color: "#50CCB5",
      border: "1px solid #50CCB5",
      paddingRight: 25,
      paddingLeft: 25,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <ul className={classes.ul}>
              <li className={classes.li}>About</li>
              <li className={classes.li}>Experience</li>
              <li className={classes.li}>Projects</li>
              <li className={classes.li}>Skills</li>
              <li className={classes.li}>Contact</li>
              <li className={classes.li}>
            <Button className={classes.resume}>Resume</Button>
              </li>
            </ul>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
