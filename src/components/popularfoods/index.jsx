import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router";

const foods = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
  },
  {
    id: 2,
    name: "Cheese Burger",
    price: "₹199",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    id: 3,
    name: "Pasta",
    price: "₹249",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500",
  },
  {
    id: 4,
    name: "Chocolate Cake",
    price: "₹350",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
  },
];

const PopularFoods = () => {
  return (
    <Container className="py-5">

      <h2 className="text-center fw-bold mb-5">
        Popular Dishes
      </h2>

      <Row>

        {foods.map((food) => (
          <Col lg={3} md={6} key={food.id} className="mb-4">

            <Card className="shadow border-0 h-100">

              <Card.Img
                variant="top"
                src={food.image}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <Card.Body>

                <Card.Title>{food.name}</Card.Title>

                <h5 className="text-danger">{food.price}</h5>

                <Button
  as={Link}
  to={`/food/${food.id}`}
  variant="danger"
  className="w-100"
>
  View Details
</Button>

              </Card.Body>

            </Card>

          </Col>
        ))}

      </Row>
    </Container>
  );
};

export default PopularFoods;