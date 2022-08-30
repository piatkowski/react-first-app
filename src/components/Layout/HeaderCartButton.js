import CartIcon from "../Cart/CartIcon";
import {Button} from "react-bootstrap";
import React from "react";

const HeaderCartButton  = () => {
    return (
        <Button variant="light">
            <CartIcon /> Cart <span>(0)</span>
        </Button>
    );
}

export default HeaderCartButton;