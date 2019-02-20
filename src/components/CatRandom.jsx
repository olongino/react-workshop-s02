import React, { Component } from 'react';
import logoDefault from '../logo.svg';
import {fetchRandomCat} from '../utils/api';

class CatRandom extends Component {
  constructor(props){
    super(props);
    this.state = { logo: logoDefault };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetchRandomCat(data => 
      this.setState({logo:data.url}));
  }

  handleClick(){
    fetchRandomCat(data => this.setState({logo:data.url}));
  }

  render() {
    const  {logo} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /><br/>
          <br/>
            <button onClick={this.handleClick}>Actualizar al gatico</button>
        </header>
      </div>
    );
  }
}

export default CatRandom;
