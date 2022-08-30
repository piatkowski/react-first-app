import {Card, Col, Row} from "react-bootstrap";
import MailItemForm from "./MailItemForm";

const MealItem = (props) => {
    let price = props.price.toFixed(2).toString();
    return (
        <Card className="mx-3 mb-4">
            <Card.Body>
                <Row className="align-items-center">
                    <Col>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>{props.description}</Card.Text>
                    </Col>
                    <Col className="text-end align-middle">
                        <Card.Title>$ {price}</Card.Title>
                        <MailItemForm />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default MealItem;