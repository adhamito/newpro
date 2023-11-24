import React from "react";
import Card from "react-bootstrap/Card";
import Bg from "../assets/bg.jpg";
import Products from "./Products";
import { Container } from "react-bootstrap";

function BasicExample() {
  return (
    <Card className="border-0">
      <Card.Img src={Bg} alt="Card image" />
      <Card.ImgOverlay>
        <Container className="   my-4">
          <Card.Title className="display-1 fw-bold text-white py-4">
            NEW SEASON ARRIVALS
          </Card.Title>
          <Card.Text className="text-white display-5">
            CHECKOUT ALL TRENDS
          </Card.Text>
        </Container>
      </Card.ImgOverlay>
      <Products />
    </Card>
  );
}

export default BasicExample;
