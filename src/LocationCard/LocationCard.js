import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import unmPhoto from "../assets/unm-photo.jpg";

const LocationCard = ({ details }) => {
  return (
    <div key={details.image}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={details.image}
          title="green iguana"
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div">
            {details.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details.distance} | {details.time} drive
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationCard;
