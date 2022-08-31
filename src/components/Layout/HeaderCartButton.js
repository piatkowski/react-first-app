import CartIcon from "../Cart/CartIcon";
import {Button} from "react-bootstrap";
import React from "react";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton  = props => {
    const [btnIsAnimated, setBtnIsAnimated] = useState(false);

    const cartContext = useContext(CartContext);
    const numberOfCartItem = cartContext.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    let btnClasses = btnIsAnimated ? classes.bump : '';

    useEffect(() => {
        if(cartContext.items.length === 0) {
            return;
        }
        setBtnIsAnimated(true);
        const timer = setTimeout(() => {
            setBtnIsAnimated(false);
        }, 300);

        //return cleanup function
        return () => {
          clearTimeout(timer);
        };
    }, [cartContext.items]);

    return (
        <Button variant="light" className={btnClasses} onClick={props.onClick}>
            <CartIcon /> Cart <span>({numberOfCartItem})</span>
        </Button>
    );
}

export default HeaderCartButton;