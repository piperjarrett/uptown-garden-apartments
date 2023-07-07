import { NavLink } from "react-router-dom";
import "./Complexes.css";
import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { complexRequest } from "../apiCalls/apiCalls";
import warningImg from "../assets/warning.png";

const Complexes = ({ complexName }) => {
  const [complex, setComplex] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    if (complexName === "Pennsylvania") {
      complexRequest(1)
        .then((data) => setComplex(data))
        .catch((err) => setError("There was an error"));
    } else if (complexName === "Marble") {
      complexRequest(2)
        .then((data) => setComplex(data))
        .catch((err) => setError("There was an error"));
    } else {
      complexRequest(3)
        .then((data) => setComplex(data))
        .catch((err) => setError("There was an error"));
    }
  }, [complexName]);

  console.log(complexName);

  const apartments = complex.apartments?.map((apartment) => {
    return (
      <div className="complex-apartment" key={apartment.id}>
        <NavLink
          to={`/${complexName}/${apartment.bedrooms}Bed/${apartment.bathrooms}Bath/${apartment.id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {apartment.bedrooms} Bed, {apartment.bathrooms} Bath
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {apartment.sqft} sq. ft.
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia
              className="apartment-preview-picture"
              component="img"
              image={apartment.floorplan}
              alt="Live from space album cover"
            />
          </Card>
        </NavLink>
      </div>
    );
  });

  return Object.keys(complex) === 0 ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : error ? (
    <div className="error-div">
      <img src={warningImg} alt="error warning" />
      <h2>Sorry an error occured, please try again later</h2>
    </div>
  ) : (
    <section className="complexes">
      <div
        className="heading-div"
        style={{
          backgroundImage: `url(${complex.preview_photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2>{complex.address}</h2>
      </div>
      <div className="complex-info">
        <div className="complex-overview">
          <h4>Overview</h4>
          <p>{complex.description}</p>
        </div>
        <div className="apartment-wrapper">
          <h3>Apartments</h3>
          <div className="apartments">{apartments}</div>
        </div>
      </div>
    </section>
  );
};

export default Complexes;
