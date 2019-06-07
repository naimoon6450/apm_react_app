import React, { Component } from 'react';
import Navbar from './Navbar'
import Products from './Products'
import axios from 'axios'

class Home extends Component {
  // need some state here with data
  constructor() {
    super()
    this.state = {
      selectedNav: 'Home',
      currentManager: '',
      selectedManager: '',
      products: [],
      managers: [],
    }

    this.navbarUpdate = this.navbarUpdate.bind(this);
    this.selectedManagerUpdate = this.selectedManagerUpdate.bind(this);
    this.saveManager = this.saveManager.bind(this);
  }

  componentDidMount() {
    // fetch the data on products
    fetch('/api/products', {method: 'GET'})
    .then(result => {
      return result.json();
    })
    .then(prods => {
      console.log(prods)
      this.setState({products: prods});
    })
    .catch(e => console.error(e));

    // fetch data on managers
    fetch('/api/users', {method: 'GET'})
    .then(result => {
      return result.json();
    })
    .then(pm => {
      this.setState({managers: pm});
    })
    .catch(e => console.error(e));

  }


  navbarUpdate(selectedNav) {
    this.setState({selectedNav: selectedNav})
    // console.log(this.state.selectedNav)
    // remove all active state and add active state to selected
    document.querySelectorAll('.nav-link').forEach(link => {
      link.innerText === selectedNav
        ? link.classList.add('active')
        : link.classList.remove('active');
    });
  }

  selectedManagerUpdate(selected) {
    // add to selected manager into array
    this.setState({selectedManager: selected})
    // console.log(selForm.options[selForm.selectedIndex].value)
    // make the association in the db
  }

  saveManager(prodId) {
    // use selected manager to associate to the prodId
    fetch('/api/products', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        prodId: prodId,
        manager: `${this.state.selectedManager}`
      })
    })
    .then(data => data.json())
    .catch(e => console.error(e))
  }

  render() {
    return (
      <div className="container">
        <div className="root">
          <h1>Acme Product Managers</h1>
          <Navbar navbarUpdate={this.navbarUpdate} />
        </div>
        {this.state.selectedNav === 'Home'
          ? <><div>We have OPENINGS!!</div>
          <hr />
            </>
          : ''
        }
        {this.state.selectedNav === 'Products'
          ? <Products products={this.state.products} managers={this.state.managers} selectedManagerUpdate={this.selectedManagerUpdate} saveManager={this.saveManager} />
          : ''
        }

      </div>

    );
  }
}

export default Home;
