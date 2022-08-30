import React, {Fragment} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <Fragment>
            <header>
                <Navbar variant="dark" bg="dark">
                    <Container>
                        <Navbar.Brand href="#">
                            <h1 className="mb-0 fw-bold fs-2">ReactMeals</h1>
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="#">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <HeaderCartButton/>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
                <div className={classes.bgImage}>
                    <Container>
                        <div className="px-2 py-5 text-white">
                            <h2 className="pt-5 fs-1">Welcome in ReactMeals !</h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet</p>
                        </div>
                    </Container>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;