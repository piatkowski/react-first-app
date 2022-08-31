import {Button, Form} from "react-bootstrap";
import classes from './QuantityInput.module.css';
import React, { useState } from 'react';

const QuantityInput = React.forwardRef((props, ref) => {
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
            <Button variant="outline-primary" size="sm" onClick={qtyDecrement}>-</Button>
            <Form.Control ref={ref} className={classes.quantityInput} type="number" {...props.input} value={qtyValue} readOnly />
            <Button variant="outline-primary" size="sm" onClick={qtyIncrement}>+</Button>
        </div>
    );
});

export default QuantityInput;