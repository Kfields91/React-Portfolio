import React from "react";
import Container from "../Container/index";
import { Carousel } from "react-bootstrap";
import Card from "../Card/index";
import "./style.css";

const mystyle = {
  maxWidth: "65%",
  height:"379px",
  margin:"0 auto",
  padding: "15px"
};

export default function Portfolio() {
  return (
    <div>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/dayplanner.png"
              alt="First slide"
              style={mystyle}
              fluid
            />
            <Carousel.Caption>
              <h3 className="dayplanner">Day Planner App</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/habitRabbitGif.gif"
              alt="Second slide"
              style={mystyle}
              fluid
            />

            <Carousel.Caption>
              <h3 className="habitrabbit">Habit Rabbit</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/eat-the-burger2.gif"
              alt="Third slide"
              style={mystyle}
              fluid
            />

            <Carousel.Caption>
              <h3 className="burgerapp">Eat-the-Burger App</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/employee-directory.gif"
              alt="Fourth slide"
              style={mystyle}
              fluid
            />
            <Carousel.Caption>
              <h3 className="employee">Employee Directory</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Fitness-tracker.gif"
              alt="Fifth slide"
              style={mystyle}
              fluid
            />
            <Carousel.Caption>
              <h3 className="fitness">Fitness Tracker App</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/readmeGenerator2.gif"
              alt="Sixth slide"
              style={mystyle}
              fluid
            />
            <Carousel.Caption>
              <h3 className="generator">ReadME Generator</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Card />
      </Container>
    </div>
  );
}
