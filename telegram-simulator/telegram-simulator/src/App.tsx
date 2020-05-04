import React from "react";
import { Router, Redirect } from "@reach/router";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout></Layout>
      <Router></Router>
    </div>
  );
}

export default App;
