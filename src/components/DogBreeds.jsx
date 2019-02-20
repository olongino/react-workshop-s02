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
    let subreeds = [];  
    breeds.map( (breed, index) => {
      subreeds.push(<li className="dogsFathers" key={breed[0].concat(index)}>{breed[0]}</li>);
      breed[1].forEach((val, indice) => { subreeds.push(<li className="dogsChildren" key={breed[0].concat(indice)} >-{val}</li>); })
      return 0;
    }); 
    return (
      <div>
          <ul className="dogsList">
              {
                subreeds.map( (breed) => breed)
              }
          </ul>
      </div>
    );
  }
}

export default DogBreads;
