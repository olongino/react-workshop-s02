import React, { Component } from 'react';
import {fetchAllBreeds} from '../utils/api';

class DogBreads extends Component {
  constructor(props){
    super(props);
    this.state = { breeds: [] };
    this.destroyArray = this.destroyArray.bind(this);
  }
  
  componentDidMount() {
    fetchAllBreeds(data => 
      this.setState(
        {breeds: Object.entries(data.message)}
      )
    );
  }

  destroyArray(breeds){
    let list = [];
    let index = list.length;
    for(const[dog, dogs] of breeds){
      list.push(<li className="dogsFathers" key={index} >{dog}</li>);
      if(dogs.length >= 1){
        for(let i=0; i<dogs.length; i++){
          index++;
          list.push(<li className="dogsChildren"  key={index}>-{dogs[i]}</li>)
        }
      }
      index++;
    } 
    return list;
  }

  render() {
    const  {breeds} = this.state;
    return (
      <div>
          <ul className="dogsList">
              { this.destroyArray(breeds) }
          </ul>
      </div>
    );
  }
}

export default DogBreads;
