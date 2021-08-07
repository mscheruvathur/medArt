import Navbaritems from "./Navbar/Navbaritems";
import PortalForms from "./Portal/PortalForms";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Component/Home/Home'

function App() {
  return (
    <Router>
      <Navbaritems />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/portal-register" component={PortalForms}/>
      </Switch>
    </Router>
  );
}

export default App;
