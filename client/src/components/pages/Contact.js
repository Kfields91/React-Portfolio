import React from "react";
import Container from "../Container";
import "./style.css";

function Contact() {
  return (
    <div>
      <Container>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card ">
              <div class="card-body">
                <h1 className="contacth1">Contact</h1>
                <hr />
                <form
                  class="col-md-9"
                  action="https://formspree.io/f/mrgoqnao"
                  method="POST"
                >
                  <div class="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input
                      name="name"
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Name"
                    />
                  </div>
                  <br />
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Email</label>
                    <input
                      name="_replyto"
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Email"
                    />
                  </div>
                  <br />
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea
                      name="message"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Message"
                      rows="3"
                    ></textarea>
                  </div>
                  <br />
                  <button class="btn btn-primary" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
