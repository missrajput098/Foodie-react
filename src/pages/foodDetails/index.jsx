import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import foodData from "../../data/foodData";
import useCart from "../../hook/useCart";

const FoodDetails = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const food = foodData.find((item) => item.id === Number(id));

  if (!food) {
    return (
      <Container className="text-center py-5">
        <h2>Food Not Found</h2>
        <Button as={Link} to="/" variant="danger" className="mt-3">
          Back to Home
        </Button>
      </Container>
    );
  }

  const handleAddToCart = () => {
    addToCart(food);
    alert(`${food.name} added to cart!`);
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col lg={6}>
          <img
            src={food.image}
            alt={food.name}
            className="img-fluid rounded shadow"
          />
        </Col>

        <Col lg={6}>
          <Card className="border-0 shadow p-4">
            <h1>{food.name}</h1>

            <h3 className="text-danger mt-3">₹{food.price}</h3>

            <p>
              <strong>Category:</strong> {food.category}
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {food.rating}
            </p>

            <p>
              <strong>Cooking Time:</strong> {food.time}
            </p>

            <p>{food.description}</p>

            <div className="d-flex gap-3 mt-3">
              <Button
                variant="danger"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>

              <Button
                as={Link}
                to="/"
                variant="outline-secondary"
              >
                Back
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FoodDetails;