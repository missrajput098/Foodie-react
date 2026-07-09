import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
            alt="Food"
            className="img-fluid rounded shadow"
          />
        </Col>

        <Col md={6}>
          <h1 className="fw-bold text-danger mb-3">
            Welcome to Foodie Hub 🍔
          </h1>

          <p className="text-muted fs-5">
            Foodie Hub is your favorite place to order delicious meals
            quickly and easily. We serve fresh burgers, pizzas, pasta,
            sandwiches, desserts, and refreshing drinks made with the
            highest quality ingredients.
          </p>

          <p className="text-muted">
            Our mission is simple—deliver tasty food with excellent
            service while making every meal memorable.
          </p>
        </Col>
      </Row>

      {/* Why Choose Us */}
      <h2 className="text-center fw-bold mb-4">
        Why Choose Us?
      </h2>

      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="text-center shadow border-0 h-100">
            <Card.Body>
              <div className="fs-1">🍕</div>
              <Card.Title>Fresh Food</Card.Title>
              <Card.Text>
                Every meal is prepared using fresh and premium-quality
                ingredients.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center shadow border-0 h-100">
            <Card.Body>
              <div className="fs-1">🚚</div>
              <Card.Title>Fast Delivery</Card.Title>
              <Card.Text>
                Hot and delicious food delivered quickly to your doorstep.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center shadow border-0 h-100">
            <Card.Body>
              <div className="fs-1">⭐</div>
              <Card.Title>Best Quality</Card.Title>
              <Card.Text>
                Customer satisfaction is our priority with every order.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Our Story */}
      <Row className="bg-light rounded p-5">
        <Col>
          <h2 className="fw-bold text-danger mb-3">
            Our Story
          </h2>

          <p className="text-muted">
            Foodie Hub started with a passion for bringing delicious food
            to everyone. From classic burgers to cheesy pizzas and sweet
            desserts, our menu is carefully crafted to satisfy every food
            lover.
          </p>

          <p className="text-muted">
            We believe that great food brings people together. Whether
            you're ordering for yourself, your family, or your friends,
            we're here to make every meal special.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;