import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "#0A192F",
        textAlign:"left",
      },
    heading1:{
        color: "#CCD6F6",
        fontSize: 75,
        fontWeight: 600,
        paddingTop: 50,
        [theme.breakpoints.down('md')]: {
            fontSize: 65,
          },
        [theme.breakpoints.down('sm')]: {
            fontSize: 50,
          },
        [theme.breakpoints.down('xs')]: {
            fontSize: 40,
          },
    },
    heading2:{
        color: "#8892B0",
        fontSize: 75,
        fontWeight: 600,
        [theme.breakpoints.down('md')]: {
            fontSize: 65,
          },
        [theme.breakpoints.down('sm')]: {
            fontSize: 50,
          },
        [theme.breakpoints.down('xs')]: {
            fontSize: 40,
          },
    },
    paragraph:{
        color: "#8892B0",
        width:"45%",
        marginTop: 30,
        lineHeight: 1.7,
        [theme.breakpoints.down('xs')]: {
            width: "100%",
          },
        
    },
    sayHello: {
        fontFamily: "monospace",
        fontSize: 20,
        backgroundColor: "#0A192F",
        color: "#50CCB5",
        border: "2.5px solid #50CCB5",
        paddingRight: 25,
        paddingLeft: 25,
        marginTop:50,

      },

}));

function Hero() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container >
            <Typography variant="h1" className={classes.heading1}>
                Ananya Gupta.
            </Typography>
            <Typography  className={classes.heading2}>
                I like to build things.
            </Typography>
            <Typography className={classes.paragraph}>
                I am a third year Computer Engineering student based in Nagpur.
                I am a third year Computer Engineering student based in Nagpur.
                I am a third year Computer Engineering student based in Nagpur.
            </Typography>
            <Button className={classes.sayHello}>Say Hello</Button>
            </Container>
        </div>
    )
}

export default Hero
