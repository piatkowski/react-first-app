import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
          <Meals />
      </main>
    </Fragment>
  );
}

export default App;
