import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap', // Allow cards to wrap to the next row
    justifyContent: 'center',
  },
}));

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');

  return (
    <div className={classes.root} id="place-to-visit">
      <div className={classes.cardContainer}>
        {places.slice(0, 6).map((place, index) => (
          <ImageCard key={index} place={place} checked={checked} />
        ))}
      </div>
    </div>
  );
}
