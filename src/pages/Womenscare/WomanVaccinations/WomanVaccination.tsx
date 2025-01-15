import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { WomensVaccinationStyled } from "./WomanVaccination.styled";

const WomanVaccination = (props: any) => {
  const { fromPage } = props;
  console.log(props, " WomanVaccinationProps ");
  return (
    <WomensVaccinationStyled>
      <Row className="main-row mt-4">
        {props?.list?.map((item: any, index: any) => (
          <Col key={index} lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="main-cards">
              <img src={item?.image} alt="" className="img-div" />
              <div className="card-body">
                <div className="title">
                  <h6> {item?.service_name || `Lab Name`}</h6>
                </div>
                <div className="Sub-title mt-2">
                  <p>
                    Often considered the same as the HPV vaccine. Helps prevent
                    {/* cervical cancer caused by HPV infections. */}
                  </p>
                </div>
                <h5>{item?.price?.discounted_price}.00 </h5>
                <button
                  className="btn custome-btn"
                  onClick={() => {
                    props?.addToCart(item);
                  }}
                >
                  Book Now
                </button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </WomensVaccinationStyled>
  );
};

export default WomanVaccination;
