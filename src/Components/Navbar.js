import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
       <nav className='navbar navbar-expand-sm navbar-dark bg-info'>
          <div className="container">
            <Link to="/" className='navbar-brand'>
                 <i class={this.props.icon} ></i>  {this.props.title}
            </Link>
            <div className="colapse navbar-collapse"></div>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link to="/about" className="nav-link">About</Link>
                </li>
              </ul>

          </div>
       </nav>
    )
  }
}

Navbar.defaultProps= {
  title:"Github Search",
  icon:"fab fa-github"
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired

}

export default Navbar