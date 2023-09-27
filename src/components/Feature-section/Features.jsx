import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Meet our passionate team of educators, developers, and designers who are committed to creating the best learning experience for you.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Meet our passionate team of educators, developers, and designers who are committed to creating the best learning experience for you.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Meet our passionate team of educators, developers, and designers who are committed to creating the best learning experience for you.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
