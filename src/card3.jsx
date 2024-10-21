import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Image3() {
  const image3 = "https://images.unsplash.com/photo-1728985630341-075aa9277eda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ice Rain
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          As ice Rain collects on branches, like trees look like they are dress in Diamonds
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image3}
      />
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
