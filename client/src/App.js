import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/NavBar'

class App extends Component {
  render() {
    const navLinks = [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Music",
        href: "/music"
      },
      {
        title: "Videos",
        href: "/videos"
      },
      {
        title: "Store",
        href: "/store"
      },
      {
        title: "News",
        href: "/news"
      },
      {
        title: "About",
        href: "/about"
      },
      {
        title: "Contact",
        href: "/contact"
      },
    ];
    return (
      <div className="App">
        <NavBar bgColor="red" titleColor="white" linkColor="yellow" navData={navLinks}/>
      </div>
    );
  }
}

export default App;
