import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-danger">Contact Us 📞</h1>
        <p className="text-muted">
          We'd love to hear from you! Send us your questions, feedback, or
          suggestions.
        </p>
      </div>

      <Row className="g-5">
        {/* Contact Form */}
        <Col lg={7}>
          <Card className="shadow border-0">
            <Card.Body className="p-4">
              <h3 className="mb-4">Send a Message</h3>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter subject"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write your message..."
                  />
                </Form.Group>

                <Button variant="danger" size="lg">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Details */}
        <Col lg={5}>
          <Card className="shadow border-0 mb-4">
            <Card.Body>
              <h4 className="text-danger mb-3">Contact Information</h4>

              <p>
                <strong>📍 Address:</strong>
                <br />
                123 Food Street, New Delhi, India
              </p>

              <p>
                <strong>📞 Phone:</strong>
                <br />
                +91 98765 43210
              </p>

              <p>
                <strong>📧 Email:</strong>
                <br />
                support@foodiehub.com
              </p>

              <p>
                <strong>🕒 Opening Hours:</strong>
                <br />
                Monday – Sunday
                <br />
                10:00 AM – 11:00 PM
              </p>
            </Card.Body>
          </Card>

          <Card className="shadow border-0">
            <Card.Body>
              <h4 className="text-danger mb-3">Follow Us</h4>

              <p>📘 Facebook</p>
              <p>📸 Instagram</p>
              <p>🐦 Twitter</p>
              <p>▶️ YouTube</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;