import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './src/pages/homepage'

import Navbar from './src/components/navbar';

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <HomePage {...props} />}
          />
        </Switch>
    </BrowserRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
