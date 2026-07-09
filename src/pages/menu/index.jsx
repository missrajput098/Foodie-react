import { Container, Row, Col, Card } from "react-bootstrap";

const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    description: "Juicy grilled beef patty with fresh lettuce, tomato, onion, and cheese."
  },
  {
    id: 2,
    name: "Cheese Pizza",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    description: "Freshly baked pizza topped with mozzarella cheese and herbs."
  },
  {
    id: 3,
    name: "French Fries",
    price: "₹99",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600",
    description: "Golden crispy fries served with tomato ketchup."
  },
  {
    id: 4,
    name: "Chicken Sandwich",
    price: "₹179",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",
    description: "Grilled chicken sandwich with fresh vegetables and creamy sauce."
  },
  {
    id: 5,
    name: "Cold Coffee",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600",
    description: "Refreshing cold coffee topped with whipped cream."
  },
  {
    id: 6,
    name: "Chocolate Cake",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    description: "Soft and delicious chocolate cake made with premium cocoa."
  }
];

const Menu = () => {
  return (
    <Container className="py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-danger">Our Menu 🍽️</h1>
        <p className="text-muted fs-5">
          Explore our delicious menu prepared with fresh ingredients and
          lots of love.
        </p>
      </div>

      <Row className="g-4">
        {menuItems.map((item) => (
          <Col md={6} lg={4} key={item.id}>
            <Card className="h-100 shadow border-0">
              <Card.Img
                variant="top"
                src={item.image}
                height="220"
                style={{ objectFit: "cover" }}
              />

              <Card.Body>
                <Card.Title className="fw-bold">
                  {item.name}
                </Card.Title>

                <Card.Text className="text-muted">
                  {item.description}
                </Card.Text>

                <h5 className="text-danger fw-bold">
                  {item.price}
                </h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Bottom Section */}
      <div className="text-center mt-5">
        <h2 className="fw-bold">Fresh Food, Great Taste ❤️</h2>
        <p className="text-muted">
          Every dish is prepared with premium-quality ingredients to
          ensure freshness, flavor, and customer satisfaction. Whether
          you're craving burgers, pizzas, sandwiches, desserts, or
          beverages, Foodie Hub has something delicious for everyone.
        </p>
      </div>
    </Container>
  );
};

export default Menu;