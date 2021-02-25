import React from "react";
import { Card } from "react-bootstrap";
import Row from "../Row/Row";
import "./style.css";

const mystyle = {
  maxWidth: "50%",
  // height:"379px",
  margin: "0 auto",
};

const cardTitle = {
  fontSize: "xx-large",
  textAlign: "center",
  background: "lightblue",
};

function card() {
  return (
    <div>
      <Card style={mystyle}>
        <Card.Title style={cardTitle}>Project List:</Card.Title>
        <Card.Body>
          <Row>
            <ul className="projectlist">
              <h4>Dayplanner</h4>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/Kfields91/Dayplanner"
                >
                  Repo Link
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://kfields91.github.io/Dayplanner/"
                >
                  Deployed Link
                </a>
              </li>
            </ul>
            <br />
            <ul className="projectlist">
              <h4>Habit Rabbit</h4>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/Kfields91/Habit-Rabbit"
                >
                  Repo Link
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://powerful-inlet-28196.herokuapp.com/"
                >
                  Deployed Link
                </a>
              </li>
            </ul>
            <br />
            <ul className="projectlist">
              <h4>Eat The Burger</h4>
              <li>
                <a target="_blank" href="https://github.com/Kfields91/burger">
                  Repo Link
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://pure-gorge-27842.herokuapp.com/"
                >
                  Deployed Link
                </a>
              </li>
            </ul>
            <br />
            {/* </Row> */}
            {/* <Row> */}
            <ul className="projectlist">
              <h4>Employee Directory</h4>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/Kfields91/employee-directory"
                >
                  Repo Link
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://kfields91.github.io/employee-directory/"
                >
                  Deployed Link
                </a>
              </li>
            </ul>
            <br />
            {/* </Row> */}
            {/* <Row> */}
            <ul className="projectlist">
              <h4>Fitness Tracker</h4>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/Kfields91/Fitness-Tracker"
                >
                  Repo Link
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://sleepy-plains-45721.herokuapp.com/"
                >
                  Deployed Link
                </a>
              </li>
            </ul>
            <br />
            <ul className="projectlist">
              <h4>README Generator</h4>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/Kfields91/README-Generator"
                >
                  Repo Link
                </a>
              </li>
              <li>Usage in Github Repo</li>
            </ul>
            <br />
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default card;
