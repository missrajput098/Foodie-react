import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Badge,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import useCart from "../../hook/useCart";



const Header = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>

        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-3 text-danger"
        >
          🍔 Foodie Hub
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mx-auto">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/menu">
              Menu
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

          </Nav>

          <div className="d-flex align-items-center gap-3">

            <Button variant="outline-danger">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>

            <Button
              as={Link}
              to="/cart"
              variant="danger"
              className="position-relative"
            >
              <FontAwesomeIcon icon={faCartShopping} />

              <Badge
                bg="warning"
                text="dark"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                {totalItems}
              </Badge>
            </Button>

          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;