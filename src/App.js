import React, { Component } from 'react';

// Lib
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

// Utils
import i18n from './i18n';

// Components
import HomePage from "./components/pages/Home/layout/HomePage";
import Header from "./components/reusable/Header";

// Styles
import './styles/css/main.css';

class App extends Component {
  state = {
    isReady: false
  }

  componentDidMount = () =>  {
    let startup = [];

    startup.push(new Promise((resolve, reject) => {
      axios.get(`${process.env.PUBLIC_URL}/config/config.json`).then(function (res) {
        window.config = res.data;
        resolve();
      });
    }));
   
    startup.push(new Promise((resolve, reject) => {
      i18n.on('initialized', function() { 
        resolve();
      });
    }));
   
    return Promise.all(startup).then(() => {  
      this.setState({ isReady: true });
    })
  }

  render () {

    const {
      isReady,
    } = this.state;

    if (!isReady) {
      return <div className="page"><CircularProgress /></div>;
    }

    return (
      <>
        <Header />
        <main>
          <HomePage />
        </main>
      </>
    )
  }
}

export default App;
