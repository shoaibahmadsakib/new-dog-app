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
import Buyadog from "./pages/Buyadog";
import Team from "./pages/Team";
import roadmap from "./pages/roadmap";
import Gallery from "./pages/Gallery";
import dotb from "./pages/dotb";

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
          <Route  path="/buyadog" component={Buyadog}/>
          <Route  path="/team" component={Team}/>
          <Route  path="/roadmap" component={roadmap}/>
          <Route  path="/gallery" component={Gallery}/>
          <Route  path="/dotb" component={dotb}/>
       
        </Switch>
        
   
        <Footer />
    
     
    </div>
    </Router>
  );
}

export default App;
