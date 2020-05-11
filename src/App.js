
  import React from "react";
  import logo from "./logo.svg";
  import "./App.css";
  import { Container, Row } from "react-bootstrap";
  import MenuBar from "./Components/Shared/MenuBar";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "font-awesome/css/font-awesome.css";

  import { Provider } from "react-redux";
  import { store } from "./State/Store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
  
  // Components 
  
        import Deployments from "./Components/deployment/deploymentList.component";
    
    
  function App() {
    return (
      <Router>
      <Provider store={store}>
      <MenuBar></MenuBar>
        <Container  fluid>
         
          <Row className="py-4 justify-content-center">
          <Switch>
            <Route path="/deployment">
                    <Deployments />
                </Route>
          <Route path="/">
            <p>Welcome this is home page</p>
          </Route>
        </Switch>
          </Row>
        </Container>
      </Provider>
      </Router>
    );
  }
  
  export default App;
  