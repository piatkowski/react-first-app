import {Button, ListGroup, Badge} from "react-bootstrap";


const CartItem = props => {
    let totalPrice = props.amount * props.price;
    return <ListGroup.Item className="d-flex align-items-start align-items-center">
        <div className="ms-2 me-auto">
            <div className="fw-bold">{props.amount} x {props.name}</div>
            <small>$ {props.price} per one</small>
        </div>
        <span className="h4">
            <Badge bg="primary" pill>
                $ {totalPrice.toFixed(2)}
            </Badge>
        </span>
        <Button variant="outline-dark" size="sm" onClick={props.onRemove}>-</Button>
        <Button variant="outline-dark" size="sm"  onClick={props.onAdd}>+</Button>
    </ListGroup.Item>
};

export default CartItem;