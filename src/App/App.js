import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import "./App.css";
import Footer from "../Footer/Footer";
import { Route } from "react-router-dom";

function App() {
  return (
    <section className="App">
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Footer />
    </section>
  );
}

export default App;
