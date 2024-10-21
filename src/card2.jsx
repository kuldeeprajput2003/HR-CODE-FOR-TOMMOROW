import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Image2() {
  const image2 = "https://media.istockphoto.com/id/492494571/photo/morning-in-taj-mahal.jpg?s=2048x2048&w=is&k=20&c=Y8nJiOzMhiMk8omOO1vRW1muieIGM4T5Zgdr7naqGD0=";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TAJ MAHAL
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Tajmahal is a beutiful symbol of love and devotion , A wonder of the world.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image2}
      />
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
