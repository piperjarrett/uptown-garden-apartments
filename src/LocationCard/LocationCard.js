import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import unmPhoto from "../assets/unm-photo.jpg";

const LocationCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={unmPhoto} title="green iguana" />
      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div">
          University of New Mexico
        </Typography>
        <Typography variant="body2" color="text.secondary">
          4.8 mi. | 10 minute drive
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
