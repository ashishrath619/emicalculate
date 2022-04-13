import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";

import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
function Home() {
  const [valueHome, setValueHome] = useState<any>(10);
  const [loanTermValu, setLoanTermValu] = useState("");

  const [PercentValue, setPercentValue] = useState<any>(100000000);
  const [DownpaymentMaxvalue, setDownpaymentMaxvalue] =
    useState<any>(100000000);

  const [valueDown, setvalueDown] = useState<any>(0);
  const [valueDownprice, setvalueDownprice] = useState<any>(0);

  const [valueDownpercent, setvalueDownpercent] = useState<any>(0);

  const handleDownpayment = (e: any) => {
    setvalueDown(parseInt(e.target.value));
    console.log("value", typeof e.target.value);
    setvalueDownprice(parseInt(e.target.value));
    var cal = (e.target.value / valueHome) * 100;
    console.log(cal);

    // if (parseInt(valueDown) > parseInt(valueHome)) {
    //   setvalueDownpercent(0);
    // } else {
    //   setvalueDownpercent((parseInt(valueDown) * 100) / parseInt(valueDown));
    // }
    setvalueDownpercent(cal);
  };

  const onHomeInputChange = (e: any) => {
    setValueHome(e.target.value);
    setDownpaymentMaxvalue(e.target.value);
    if (parseInt(valueDown) > parseInt(valueHome)) {
      setvalueDownpercent(0);
    } else {
      setvalueDownpercent((parseInt(valueHome) * 100) / parseInt(valueDown));
    }
    // setvalueDownpercent(e.target.value / valueDown);
  };
  //   var calculateInterest = function (total: any, year: any, rate: any) {

  //     return parseFloat((total * Math.pow(interest, year)).toFixed(4));
  //   };

  const handleLoanyearChange = (e: any) => {
    setLoanTermValu(e.target.value);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3>Synergy One Lending Mortgage Calculator</h3>
            <br />
            <p>
              How much will your monthly mortgage payment be? Use this
              calculator to figure out your monthly payment, including your
              mortgage's principal and interest payments as well as insurance
              and taxes.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Home price</Form.Label>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">$</InputGroup.Text>

                <FormControl
                  //   placeholder="Username"\
                  type="text"
                  value={valueHome}
                  onChange={onHomeInputChange}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form.Group>
            <RangeSlider
              value={valueHome}
              onChange={onHomeInputChange}
              tooltipLabel={(currentValue) => `$${currentValue}`}
              tooltip="auto"
              variant="dark"
              max={parseInt(PercentValue)}
            />

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Down Payment</Form.Label>
              <InputGroup>
                {" "}
                <InputGroup.Text>$</InputGroup.Text>
                <FormControl
                  aria-label="price"
                  value={valueDownprice}
                  onChange={(e) => setvalueDownprice(e.target.value)}
                />
                <InputGroup.Text>%</InputGroup.Text>
                <FormControl
                  aria-label="percent"
                  value={valueDownpercent}
                  onChange={(e) => setvalueDownpercent(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <RangeSlider
              value={valueDown}
              onChange={handleDownpayment}
              tooltipLabel={(currentValue) => `$${currentValue}`}
              tooltip="auto"
              variant="dark"
              max={parseInt(DownpaymentMaxvalue)}
            />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Loan Term</Form.Label>
              <InputGroup className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  value={loanTermValu}
                  onChange={handleLoanyearChange}
                >
                  <option value="10 years">10 years</option>
                  <option value="20 years">20 years</option>
                  <option value="30 years">30 years</option>
                  <option value="40 years">40 years</option>
                </Form.Select>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Interest rate</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="rate"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
