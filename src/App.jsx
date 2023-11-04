import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import Footer from './components/Footer';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url('/assets/lib1.jpg')`,
    width:'100%',
    // backgroundColor: '#43A047',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit/>
      <Footer/>
    </div>
    </>
  );
}