import React from "react";
import Container from "../Container/index";
import { Carousel, Image } from "react-bootstrap";

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
              fluid
            />
            <Carousel.Caption>
              <h3>Day Planner App</h3>
              <a href="https://github.com/Kfields91/Dayplanner">Repo Link</a>
              <br />
              <a href="https://kfields91.github.io/Dayplanner/">
                Deployed Link
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/habitRabbitGif.gif"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Habit Rabbit</h3>
              {/* NEED TO FIX REPO LINKS */}
              <a href="https://github.com/Kfields91/Dayplanner">Repo Link</a>
              <br />
              <a href="https://kfields91.github.io/Dayplanner/">
                Deployed Link
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/eat-the-burger2.gif"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Eat-the-Burger App</h3>
              <a href="https://github.com/Kfields91/Dayplanner">Repo Link</a>
              <br />
              <a href="https://kfields91.github.io/Dayplanner/">
                Deployed Link
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/employee-directory.gif"
              alt="First slide"
              fluid
            />
            <Carousel.Caption>
              <h3>Employee Directory</h3>
              <a href="https://github.com/Kfields91/Dayplanner">Repo Link</a>
              <br />
              <a href="https://kfields91.github.io/Dayplanner/">
                Deployed Link
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Fitness-tracker.gif"
              alt="First slide"
              fluid
            />
            <Carousel.Caption>
              <h3>Fitness Tracker App</h3>
              <a href="https://github.com/Kfields91/Dayplanner">Repo Link</a>
              <br />
              <a href="https://kfields91.github.io/Dayplanner/">
                Deployed Link
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/readmeGenerator2.gif"
              alt="First slide"
              fluid
            />
            <Carousel.Caption>
              <h3>ReadME Generator</h3>
              <a href="https://github.com/Kfields91/Dayplanner">Repo Link</a>
              <br />
              <a href="https://kfields91.github.io/Dayplanner/">
                Deployed Link
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
