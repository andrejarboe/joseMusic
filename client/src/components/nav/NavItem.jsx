import React, { Component } from 'react';

class NavItem extends Component {
  render() {
    return (
      <li><a href={this.props.href}>{this.props.title}</a></li>
    );
  }
}

export default NavItem;
