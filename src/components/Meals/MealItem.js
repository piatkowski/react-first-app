import {Card, Col, Row} from "react-bootstrap";
import MailItemForm from "./MailItemForm";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
    const cartContext = useContext(CartContext);

    let price = props.price.toFixed(2).toString();

    const addToCartHandler = amount => {
        cartContext.addItem({
           id: props.id,
           name: props.name,
           amount: amount,
           price: props.price
        });
    };

    return (
        <Card className="mx-3 mb-4">
            <Card.Body>
                <Row className="align-items-center">
                    <Col className="col-lg-8 col-12">
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>{props.description}</Card.Text>
                    </Col>
                    <Col className="col-lg-2">
                        <Card.Title>$ {price}</Card.Title>
                    </Col>
                    <Col className="col-lg-2 text-end align-middle">
                        <MailItemForm onAddToCart={addToCartHandler} />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default MealItem;