import {Fragment, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

    // It could be Context, but use useState for learning purposes
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false);
    }

    return (
        <Fragment>
            <Cart isShown={cartIsShown} onHide={hideCartHandler} />
            <Header onShow={showCartHandler} />
            <main>
                <Meals/>
            </main>
        </Fragment>
    );
}

export default App;
