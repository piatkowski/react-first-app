import {Modal, Button, ListGroup, Badge} from 'react-bootstrap';
import CartItem from "./CartItem";
const Cart = props => {

    // Sample data from backend API
    const data = [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}, {
        id: 'c2',
        name: 'Cheesburger',
        amount: 1,
        price: 22.99
    }, {id: 'c3', name: 'Salad', amount: 3, price: 2.99}, {id: 'c4', name: 'Breakfast', amount: 1, price: 5.99}];

    let totalAmount = 0;

    const cartItems = data.map(item => {
        totalAmount += item.amount * item.price;
        return <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
        />
    });

    return <Modal show={props.isShown} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
                {cartItems}
            </ListGroup>
            <div className="text-end mt-3">
                <span className="h4">
                    <Badge bg="success" pill>
                        Total: $ {totalAmount.toFixed(2)}
                    </Badge>
                 </span>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
            <Button variant="primary">Checkout</Button>
        </Modal.Footer>
    </Modal>
};

export default Cart;