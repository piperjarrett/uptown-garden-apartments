import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import "./App.css";
import Footer from "../Footer/Footer";
import { Route } from "react-router-dom";
import Complexes from "../Complexes/Complexes";
import Apartment from "../Apartment/Apartment";
import AboutLocation from "../AboutLocation/AboutLocation";

function App() {
  return (
    <section className="App">
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Pennsylvania">
        <Complexes />
      </Route>
      <Route path="/Dallas">
        <Complexes />
      </Route>
      <Route path="/Marble">
        <Complexes />
      </Route>
      <Route
        path="/:id/:id"
        render={({ match }) => <Apartment apartment={match.params.id} />}
      ></Route>
      <Route path="/location">
        <AboutLocation />
      </Route>
      <Footer />
    </section>
  );
}

export default App;
