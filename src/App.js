import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import Login from "./pages/Login";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Users></Users>
        </Route>
        <Route path="/user/:id">
          <UserDetails></UserDetails>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
