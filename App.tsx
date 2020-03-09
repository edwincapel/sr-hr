import React from 'react';
import { StyleSheet } from 'react-native';
import { pdfjs } from 'react-pdf';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './src/pages/homepage'

import "bootstrap/dist/css/bootstrap.min.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function App() {
  return (
    <BrowserRouter>
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
