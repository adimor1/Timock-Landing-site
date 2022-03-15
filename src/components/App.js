import React, { useState } from 'react';
import Header from '../components/ui/Header';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ui/Theme'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Technologies from './Technologies';

import ReactDOM from "react-dom";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>

          <Route
            exact
            path="/"
            render={(props) => <LandingPage
              {...props}
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />}
          />
          <Route
            exact
            path="/technologies"
            render={(props) => <Technologies
              {...props}
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />}
          />
        </Switch>

        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;