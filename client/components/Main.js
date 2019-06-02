import React, { Component } from 'react';
import Navbar from './Navbar'
import Products from './Products'

class Home extends Component {
  // need some state here with data
  constructor() {
    super()
    this.state = {
      selectedNav: [],
      selectedManagers: [],
      products: [],
      managers: [],
    }
  }

  componentDidMount() {
    // fetch the data on products
    fetch('/api/products', {method: 'GET'})
    .then(result => {
      return result.json();
    })
    .then(prods => {
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

  render() {
    return (
      <div className='container'>
        <h1>Acme Product Managers</h1>
        <Navbar />
        <Products prods={this.state.products} managers={this.state.managers} />
      </div>
      
    );
  }
}

export default Home;
