import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
          <Meals />
      </main>
        <Cart />
    </Fragment>
  );
}

export default App;
