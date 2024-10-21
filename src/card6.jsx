import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Image6() {
  const image6 = "https://images.unsplash.com/photo-1729115608410-5acf666a2485?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          A TOWER
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          The tower reaches high into the sky a symbol of strength and endurance
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image6}
      />
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
