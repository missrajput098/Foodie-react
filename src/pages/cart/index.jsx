import { Container, Table, Button } from "react-bootstrap";
import useCart from "../../hook/useCart";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container className="py-5">
      <h2 className="mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <h4>Your Cart is Empty 🛒</h4>
      ) : (
        <>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Food</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      width="80"
                    />
                  </td>

                  <td>{item.name}</td>

                  <td>₹{item.price}</td>

                  <td>
                    <Button
                      size="sm"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </Button>

                    <span className="mx-2">
                      {item.quantity}
                    </span>

                    <Button
                      size="sm"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </Button>
                  </td>

                  <td>
                    ₹{item.price * item.quantity}
                  </td>

                  <td>
                    <Button
                      variant="danger"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h3 className="text-end">
            Total: ₹{total}
          </h3>
        </>
      )}
    </Container>
  );
};

export default Cart;