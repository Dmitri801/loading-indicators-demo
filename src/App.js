import React, { Component } from 'react';
import SpinnerOne from "./components/Spinner1";
import SpinnerTwo from "./components/Spinner2";
import SpinnerThree from "./components/Spinner3";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         <h1 className="title">Loaders..</h1>
        </header>
        <main>
          <div className="box">
          <SpinnerOne />
          </div>
          <div className="box">
          <SpinnerTwo />
          </div>
          <div className="box">
          <SpinnerThree />
          </div>
          <div className="box">
          Loader 2
          </div>
          <div className="box">
           Loader 3
          </div>
        </main>
      </div>
    );
  }
}

export default App;
