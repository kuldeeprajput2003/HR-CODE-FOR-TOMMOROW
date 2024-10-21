import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Image1() {
  const image1 = "https://images.unsplash.com/photo-1719937206220-f7c76cc23d78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ENGINEER<i class="fa-solid fa-xmark"></i>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          "This laptop isn't just a device ; its the engine that powers my ideas ,design and dreams"<br />
          <b><i></i></b>

        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image1}
      />
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
