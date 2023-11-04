import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

export default function ImgMediaCard({ place, checked }) {
  const [showFullDescription, setShowFullDescription] = React.useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card
        style={{
          maxWidth: 545,
          fontFamily: 'Nunito',
          background: 'rgba(0, 0, 0, 0.5)',
          margin: '20px',
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          image={place.imageUrl}
          title={place.title}
          style={{
            height: 440,
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            style={{
              fontFamily: 'Nunito',
              fontWeight: 'bold',
              fontSize: '2rem',
              color: '#fff',
              textShadow: '2px 2px 4px #F57C00',
            }}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              fontFamily: 'Nunito',
              fontSize: '1.1rem',
              color: '#ddd',
              maxHeight: showFullDescription ? 'none' : '4.4rem', // Limit to 2 lines
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: showFullDescription ? 'unset' : 2, // Show 2 lines
              WebkitBoxOrient: 'vertical',
            }}
          >
            {place.description}
          </Typography>
          <CardActions>
            <Button
              size="medium"
              onClick={toggleDescription}
              sx={{ background: '#1A237E', color: 'white', fontWeight: 'bold', fontFamily: 'Nunito' }}
            >
              {showFullDescription ? 'Show Less' : 'Show More'}
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Collapse>
  );
}
