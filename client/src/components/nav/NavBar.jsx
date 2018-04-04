import React, { Component } from 'react';
import NavItem from './NavItem';

class NavBar extends Component {
  // navStyle = () => {
  //   WebkitBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
  //   MozBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
  //   boxShadow: "0 0 4px rgba(0,0,0,0.4)",
  //   borderRadius: 0
  // }

  if(this.props.bgColor){
    navStyle.background = this.props.bgColor;
  }

  createLinkItem = (item, index) => {
    return <NavItem key={item.title + index} href={item.href} title={item.title} />;
  };

  render() {
    return (
      <div>
        <nav style={navStyle} className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="/" className="navbar-brand">Jose Music</a>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">{this.props.navData.map(this.createLinkItem)}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
