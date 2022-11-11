import { Card } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./css/styles.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Hotel from "./Hotel.png";
import { muiAbtn } from "./style";

export default function ViewVendors() {
  return (
    <div
      style={{
        width: "100%",
        padding: 40,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card style={{ padding: 30, borderRadius: 10 }}>
        <div
          style={{
            backgroundColor: "#205075",
            padding: 15,
            color: "#FEC25D",
            borderRadius: 4,
          }}
        >
          <h3>
            <b>John Doe</b>
          </h3>
          <h6>John@gmail.com</h6>
        </div>
        <div className="row" style={{ padding: 20 }}>
          <h3
            style={{
              textAlign: "center",
              marginTop: 25,
              marginBottom: 25,
              textTransform: "uppercase",
            }}
          >
            <b>All Properties</b>
          </h3>
          <div className="col">
            <Card sx={{ maxWidth: 345 }}>
              <img src={Hotel} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  OwenFil Hotel
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  ₦342.00
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Owenfil Hotel is one of the hotels that is highly recommended
                  by every customer. This hotel has very complete facilities and
                  a very...
                </Typography>
              </CardContent>
              <CardActions className="mb-2 ml-2">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#205075", color: "#FEC25D" }}
                  size="small"
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#205075", color: "#FEC25D" }}
                  size="small"
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#205075", color: "#FEC25D" }}
                  size="small"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="col">
            <Card sx={{ maxWidth: 345 }}>
              <img src={Hotel} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  OwenFil Hotel
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  ₦342.00
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Owenfil Hotel is one of the hotels that is highly recommended
                  by every customer. This hotel has very complete facilities and
                  a very...
                </Typography>
              </CardContent>

              <CardActions className="mb-2 ml-2">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#205075", color: "#FEC25D" }}
                  size="small"
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#205075", color: "#FEC25D" }}
                  size="small"
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#205075", color: "#FEC25D" }}
                  size="small"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="col">
            <Card sx={{ maxWidth: 345 }}>
              <img src={Hotel} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  OwenFil Hotel
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  ₦342.00
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Owenfil Hotel is one of the hotels that is highly recommended
                  by every customer. This hotel has very complete facilities and
                  a very...
                </Typography>
              </CardContent>
              <CardActions className="mb-2 ml-2">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#205075", color: "#FEC25D" }}
                  size="small"
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#205075", color: "#FEC25D" }}
                  size="small"
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#205075", color: "#FEC25D" }}
                  size="small"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
