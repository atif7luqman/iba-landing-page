import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 255, 0.5)',
    height: '30vh',
    fontFamily: 'Nunito',
    color: '#fff',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    width: '200px',
    height: '200px',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="footer">
      <div className={classes.column}>
        <img
          src="/assets/iba.png"
          alt="Logo image"
          className={classes.image}
        ></img>
      </div>
      <div className={classes.column}>
        <h5>Contact Us</h5>
        <p>Address: Nisar Ahmed Siddiqui Road, Sukkur, Sindh, Pakistan</p>
        <p>Telephone: 071-5644000/05</p>
        <p>Email: info@iba-suk.edu.pk</p>
      </div>
    </div>
  );
}
