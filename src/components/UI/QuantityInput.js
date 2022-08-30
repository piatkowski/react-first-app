import {Button, Form} from "react-bootstrap";
import classes from './QuantityInput.module.css';
import { useState } from 'react';

const QuantityInput = (props) => {
    const [qtyValue, setQtyValue] = useState(1);

    const qtyIncrement = () => {
        if(qtyValue < props.input.max)
            setQtyValue(qtyValue + props.input.step);
    };

    const qtyDecrement = () => {
        if(qtyValue > props.input.min)
            setQtyValue(qtyValue - props.input.step);
    };

    return (
        <div className="mb-1">
            <Button variant="danger" onClick={qtyDecrement}>-</Button>
            <Form.Control className={classes.quantityInput} type="number" {...props.input} value={qtyValue} readOnly />
            <Button variant="success" onClick={qtyIncrement}>+</Button>
        </div>
    );
};

export default QuantityInput;