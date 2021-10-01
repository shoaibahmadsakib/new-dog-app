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
import BuyAnApp from "./pages/Buyadog";
import Team from "./pages/Team";
import Rodemap from "./pages/roadmap";
import Gallary from "./pages/Gallery";
import Mayc from "./pages/dotb";

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
          <Route  path="/buyanapp" component={Buyadog}/>
          <Route  path="/team" component={Team}/>
          <Route  path="/rodemap" component={roadmap}/>
          <Route  path="/gallary" component={Gallery}/>
          <Route  path="/mayc" component={dotb}/>
       
        </Switch>
        
   
        <Footer />
    
     
    </div>
    </Router>
  );
}

export default App;
