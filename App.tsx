import React from 'react';
import { pdfjs } from 'react-pdf';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './src/pages/homepage'
import { Helmet } from 'react-helmet';
import "bootstrap/dist/css/bootstrap.min.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <html lang="en" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Switch>
        <Route 
          exact 
          path="/" 
          render={(props: any) => <HomePage {...props} />} 
        />
      </Switch>
    </BrowserRouter>
  );
}