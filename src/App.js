import "./App.css";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Termscondition from "./pages/Termscondition";
import BuyAnApp from "./pages/BuyAnApp";
import Team from "./pages/Team";
import Rodemap from "./pages/Rodemap";
import Gallary from "./pages/Gallary";
import Mayc from "./pages/Mayc";

function App() {
  return (
    <Router>
    <div className="App">
      
        <Switch>
          <Route exact  path="/">
            <HomePage/>
          </Route>
          <Route  path="/terms">
            <Termscondition/>
          </Route>
          <Route  path="/buyanapp" component={BuyAnApp}/>
          <Route  path="/team" component={Team}/>
          <Route  path="/rodemap" component={Rodemap}/>
          <Route  path="/gallary" component={Gallary}/>
          <Route  path="/mayc" component={Mayc}/>
       
        </Switch>
        
   
        <Footer />
    
     
    </div>
    </Router>
  );
}

export default App;
