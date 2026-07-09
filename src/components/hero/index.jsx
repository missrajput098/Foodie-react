import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div
      className="py-5"
      style={{
        background: "#FFF3E0",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">

          <Col lg={6}>
            <h1 className="display-3 fw-bold">
              Delicious Food
              <br />
              Delivered To You
            </h1>

            <p className="text-muted mt-3 fs-5">
              Fresh ingredients, amazing taste, and quick delivery.
            </p>

            <Button variant="danger" size="lg" className="mt-3">
              Order Now
            </Button>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800"
              alt="Pizza"
              className="img-fluid rounded-4 shadow"
            />
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Hero;