import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./LocationCard.css";

const LocationCard = ({ details }) => {
  return (
    <div key={details.image}>
      <Card sx={{ maxWidth: 345 }} className="location-card">
        <CardMedia
          sx={{ height: 140 }}
          image={details.image}
          title="green iguana"
        />
        <CardContent className="card-content">
          {/* {details.name === '' ?
          ( */}
          <Typography gutterBottom variant="h8" component="div">
            {details.name}
          </Typography>
          {/* ) 
           : 
           (<Typography gutterBottom   variant='h10' component="div">
             {details.name}
           </Typography> )} */}
          <Typography variant="body2" color="text.secondary">
            {details.distance} | {details.time}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationCard;
