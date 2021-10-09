import "./App.css";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Termscondition from "./pages/Termscondition";
import Buyadog from "./pages/Buyadog";
import Team from "./pages/Team";
import roadmap from "./pages/roadmap";
import Gallery from "./pages/Gallery";
import dotb from "./pages/dotb";
import members from "./pages/Members";
const { items } = require("./data/data.json");

function App() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    let d = [];
    Object.keys(items)
      

      .map(function (key) {
        fetch(items[key].link)
          .then((re) => re.json())

          .then((res) => {
      
            d.push(res);
            console.log(res);
            // d.push(res.external_url);
          })
          .catch((err) => console.log(err));
      });

    setData(d);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/terms">
            <Termscondition />
          </Route>
          <Route path="/buyadog" component={Buyadog} />
          <Route path="/team" component={Team} />
          <Route path="/roadmap" component={roadmap} />
          <Route path="/gallery" component={() => <Gallery data={data} />} />
          <Route path="/dotb" component={dotb} />
          <Route path="/members" component={members} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
