import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import "./sideView.css";
function SideView() {
  const [activebtn, setactivebtn] = useState(true);
  const [activebtntwo, setactivebtntwo] = useState(false);

  const handleActive = () => {
    setactivebtn(true);
    setactivebtntwo(false);
  };
  const handleActiveTwo = () => {
    setactivebtntwo(true);
    setactivebtn(false);
  };
  return (
    <>
      <Container className=" card sideCardView">
        <Row>
          <Col>
            <h3>Your expected monthly mortgage payment is $1,820.</h3>
            <Button variant="warning">Get Started</Button>
            <Button variant="warning" className="m-4">
              Find A Loan Officer
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <button
              className={activebtn ? "brekdownbtnactive" : "brekdownbtn"}
              onClick={handleActive}
            >
              Brekdown
            </button>
            <button
              className={activebtntwo ? "brekdownbtnactive" : "brekdownbtn"}
              onClick={handleActiveTwo}
            >
              Shedule
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SideView;
