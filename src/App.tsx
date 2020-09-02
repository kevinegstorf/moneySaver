import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Progress from "./pages/Progress";
import Balance from "./pages/Balance";
import Budget from "./pages/Budget";
import FixedCosts from "./pages/FixedCosts";
import "./App.css";
import Layout from "./layout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: deepOrange[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route exact path="/progress">
            <Layout>
              <Progress />
            </Layout>
          </Route>
          <Route exact path="/budget">
            <Layout>
              <Budget />
            </Layout>
          </Route>
          <Route exact path="/balance">
            <Layout>
              <Balance />
            </Layout>
          </Route>
          <Route exact path="/fixed-costs">
            <Layout>
              <FixedCosts />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
