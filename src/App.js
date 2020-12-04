import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ProductRow from './components/ProductRow';
import products from './data.json';
import { getAllProducts } from './components/products';

class App extends React.Component {
  state = {
    products: [],
    search: '',
  };

  componentDidMount = () => {
    getAllProducts().then((products) => {
      this.setState({ products });
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const filteredProducts = this.state.products.filter((el) => {
      return el.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
    console.log(filteredProducts);

    return (
      <div className="App">
        <h1>IronStore</h1>

        <SearchBar
          search={this.state.search}
          franckAndHugo={this.handleChange}
        />

        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default App;
