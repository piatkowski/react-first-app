import {Button} from "react-bootstrap";
import QuantityInput from "../UI/QuantityInput";
import {useRef, useState} from 'react';

const MailItemForm = props => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form onSubmit={submitHandler}>
            <QuantityInput ref={amountInputRef} input={{
                min: 1,
                max: 5,
                step: 1
            }}/>
            <Button variant="primary" type="submit">Add to Cart</Button>
            {!amountIsValid && <p>Please enter a valid amount 1-5!</p>}
        </form>
    )
};

export default MailItemForm;