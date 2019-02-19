import React, { Component } from 'react';
import {fetchAllBreeds} from '../utils/api';

class DogBreads extends Component {
  constructor(props){
    super(props);
    this.state = { breeds: [] };
  }
  
  componentDidMount() {
    fetchAllBreeds(data => 
      this.setState(
        {breeds: Object.entries(data.message)}
      )
    );
  }

  render() {
    const  {breeds} = this.state;
    return (
      <div>        
        <ul>
          {breeds.map( breed=> <li key={breed} >{breed} </li> )}
        </ul>
      </div>
    );
  }
}

export default DogBreads;
