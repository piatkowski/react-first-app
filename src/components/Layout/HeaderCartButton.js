import CartIcon from "../Cart/CartIcon";
import {Button} from "react-bootstrap";
import React from "react";

const HeaderCartButton  = props => {
    return (
        <Button variant="light" onClick={props.onClick}>
            <CartIcon /> Cart <span>(0)</span>
        </Button>
    );
}

export default HeaderCartButton;