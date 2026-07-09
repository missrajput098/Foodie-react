import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faBurger,
  faIceCream,
  faMugHot,
  faFish,
  faCookie,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  { name: "Pizza", icon: faPizzaSlice },
  { name: "Burger", icon: faBurger },
  { name: "Dessert", icon: faIceCream },
  { name: "Coffee", icon: faMugHot },
  { name: "Sea Food", icon: faFish },
  { name: "Snacks", icon: faCookie },
];

const Categories = () => {
  return (
    <Container className="py-5">

      <h2 className="text-center fw-bold mb-5">
        Food Categories
      </h2>

      <Row>

        {categories.map((item, index) => (
          <Col lg={2} md={4} sm={6} xs={6} key={index} className="mb-4">

            <Card className="text-center shadow-sm border-0 p-4 h-100">

              <FontAwesomeIcon
                icon={item.icon}
                size="3x"
                className="text-danger mb-3"
              />

              <h5>{item.name}</h5>

            </Card>

          </Col>
        ))}

      </Row>
    </Container>
  );
};

export default Categories;