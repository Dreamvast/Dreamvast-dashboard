import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider>
      <CSSReset />
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </StrictMode>
);

reportWebVitals();