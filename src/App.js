import React, { Component } from 'react';
import SpinnerOne from "./components/Spinner1";
import SpinnerTwo from "./components/Spinner2";
import SpinnerThree from "./components/Spinner3";
import LoaderOne from "./components/Loader1";
import LoaderTwo from "./components/Loader2";
import LoaderThree from "./components/Loader3/index.jsx";
let intervalCountdown;
class App extends Component {
  state = {
    loading: true,
    seconds: 1,
    
  }

  componentDidMount() {
    this.countDown()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.seconds === 99) {
      document.getElementById("loaderThree").style.animation = "rotateImg 4s linear infinite";
      this.setState({
        loading: false
        
      }, () => {
        clearInterval(intervalCountdown)
        setTimeout(() => {
          this.setState({
            seconds: 1
          },  this.countDown)
        }, 2000)
      })

     
    }
  }

countDown = () => {
  // Count up seconds real fast until 95  - pause for a bit - than finish
  if(document.getElementById("loaderThree")) {
    if(document.getElementById("loaderThree").style.animation !== "") {
      document.getElementById("loaderThree").style.animation = "";
    }
  }
  const {seconds} = this.state;
  intervalCountdown = setInterval(() => {
    if(seconds < 95) {
      
      this.setState(prevState => {
        
       return {
        seconds: prevState.seconds + 1
       }
      })
      
      
    } 
    
  }, 10) 
}
  render() {
  
    const {seconds} = this.state;
    return (
      <div className="App">
        <header>
         <h1 className="title">Loaders..</h1>
        </header>
        <main>
          <div className="box">
          <SpinnerOne countDown={this.countDown} seconds={seconds} intervalCountdown={intervalCountdown} />
          </div>
          <div className="box">
          <SpinnerTwo />
          </div>
          <div className="box">
          <SpinnerThree />
          </div>
          <div className="box">
          <LoaderOne widthPerc={seconds} />
          </div>
          <div className="box">
          <LoaderTwo />
          </div>
          <div className="box">
          <LoaderThree widthPerc={seconds} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
