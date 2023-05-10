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
      <div className="main">
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/complex/:id"
          render={({ match }) => <Complexes complexName={match.params.id} />}
        ></Route>
        {/* <Route path="/Dallas">
        <Complexes />
      </Route>
      <Route path="/Marble">
        <Complexes />
      </Route> */}
        <Route
          path="/:id/:id/:id"
          render={({ match }) => <Apartment apartmentId={match.params.id} />}
        ></Route>
        <Route path="/location">
          <AboutLocation />
        </Route>
        <Footer />
      </div>
    </section>
  );
}

export default App;
