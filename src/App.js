import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./content/form/form";
import Cv from "./content/cv/cv";
function App() {
  return (
    <div className="App">
      
        <header>
          <h1>CV Genarator</h1>
        </header>
        <Router>
          <Switch>
            <Route path="/cv">
              <Cv />
            </Route>
            <Route path="/">
              <Form />
            </Route>
          </Switch>
        </Router>
    
    </div>
  );
}

export default App;
