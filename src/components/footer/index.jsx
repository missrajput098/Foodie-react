import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons"; 

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row>

          {/* Logo & Description */}
          <Col lg={4} md={6} className="mb-4">
            <h2 className="fw-bold text-warning">🍔 Foodie Hub</h2>

            <p className="mt-3">
              Fresh food, fast delivery, and unforgettable taste.
              Discover your favorite dishes from around the world.
            </p>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link
                  to="/"
                  className="text-decoration-none text-light"
                >
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/menu"
                  className="text-decoration-none text-light"
                >
                  Menu
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-decoration-none text-light"
                >
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-decoration-none text-light"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </Col>

          {/* Contact */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>

            <p>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="me-2 text-warning"
              />
              New Delhi, India
            </p>

            <p>
              <FontAwesomeIcon
                icon={faPhone}
                className="me-2 text-warning"
              />
              +91 98765 43210
            </p>

            <p>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="me-2 text-warning"
              />
              foodiehub@gmail.com
            </p>
          </Col>

          {/* Social Media */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>

            <div className="d-flex gap-3">

              <a href="#" className="text-light fs-4">
                {/* <FontAwesomeIcon icon={faFacebooK} /> */}
              </a>

              <a href="#" className="text-light fs-4">
                {/* <FontAwesomeIcon icon={faInstagram} /> */}
              </a>

              <a href="#" className="text-light fs-4">
                {/* <FontAwesomeIcon icon={faTwitter} /> */}
              </a>

              <a href="#" className="text-light fs-4">
                {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
              </a>

            </div>
          </Col>

        </Row>

        <hr className="border-secondary" />

        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Foodie Hub. All Rights Reserved.
          </p>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;