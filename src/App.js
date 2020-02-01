import React from 'react';
import Card from './Card.js';
import SearchBar from './searchBar.js';
import axios from "axios"; 

class App extends React.Component {

  constructor(props){
    //Creating an entry to receive foodEntries
    super(props)
      this.state = {
        foodEntries: [] 
      }

  }

  render(){
    return <React.Fragment>
      <SearchBar></SearchBar>
      { this.state.foodEntries.map(foodEntry => 
        <Card name = {foodEntry.name} price = {foodEntry.price} 
        description = {foodEntry.description} locations = {foodEntry.locations} image = {foodEntry.image}>
        </Card>
      )

      }
    </React.Fragment>
  }
}

export default App;
