import {Modal, Button, ListGroup, Badge} from 'react-bootstrap';
import CartItem from "./CartItem";
import { useContext} from "react";
import CartContext from "../../store/cart-context";

const Cart = props => {
    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartContext.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartContext.addItem({...item, amount: 1});
    };

    const cartItems = cartContext.items.map(item => {
        return <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />
    });

    return <Modal show={props.isShown} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
                {cartItems}
                {!hasItems && <p className="text-center">Your cart is empty!</p>}
            </ListGroup>
            {hasItems && <div className="text-end mt-3">
                <span className="h4">
                    <Badge bg="success" pill>
                        Total: {totalAmount}
                    </Badge>
                 </span>
            </div>}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
            {hasItems && <Button variant="primary" onClick={alert.bind(null, 'Checkout')}>Checkout</Button>}
        </Modal.Footer>
    </Modal>
};

export default Cart;