import React from "react";
import Container from "../Container";
import Row from "../Row/Row";

function About() {
  return (
    <div>
      <Container>
        <Row>
          <img src="/images/profile.jpg" width="250" height="250"/>
          {/* NEED TO STYLE H1 TO CENTER OR REALIGN DIFF CLASSNAME*/}
          <h1 className="justify-text-center">About Me</h1>
          <p>
            Growing up in the Pacific NorthWest where it's constantly raining
            taught me how to lean into my imagination. I recently made a career
            change because I believe imagination, innovation, and science are
            particularly important for the future of our planet. Web development
            provides an incredible creative outlet with vast opportunities for
            continuous learning. I feel incredibly optimistic and thankful to be
            able and ready to learn new skills. Currently, I'm enrolled in the
            University of Washington's Full-Stack Coding Bootcamp. Checkout my
            LinkedIn page for specific skills, experience, and education
            details. Also, Browse my github page for current and past projects!
            Don't forget to head over to my portfolio page! Click on the pics
            for a direct link to it's github hosted site!
          </p>
        </Row>
        <Row>
          <h5>Email:</h5>
          <ul>
            <li>kelsea.fields@yahoo.com</li>
            <li>kelseafields91@gmail.com</li>
          </ul>
        </Row>
        <Row>
          <h5>PHONE NUMBER:</h5>
          <ul>
            <li>(360)747-4782</li>
          </ul>
          <br />
        </Row>
        <Row>
          <h5>Professional Sites:</h5>
          <br />
          {/* NEED HELP WITH THESE LINKS IN REACT && HOW TO REDIRECT IN NEW TAB*/}
          <ul>
            <li>
              <a href="https://github.com/Kfields91">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kelsea-fields-42b7971ab">
                LinkedIn
              </a>
            </li>
          </ul>
          <br />
        </Row>
        <Row>
          <h5>Resume: </h5>
          <ul>
            <li>
              <a href="./assets/extras/resume2.pdf" download>
                Click HERE to download a pdf of my resume
              </a>
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  );
}

export default About;
