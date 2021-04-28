import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  // onChangeType comes back with the event of the change of the dropdown menu
  // in Filter.js the filter option would be the event.target.value
  onChangeType = (event) => {
    let filter = event.target.value
    this.setState({
      filters: {...this.state.filters, type: filter}
    })
  }
  // initiate the fetch of the pets (received from button click in Filter.js)
  onFindPetsClick = () => {
    let site="/api/pets"
    if (this.state.filters.type !== 'all') {
      site+=`?type=${this.state.filters.type}`
    }
    fetch(site)
      .then(resp => resp.json())
      // result in an array of pets
      .then(pets => this.setState({pets: pets}))
  }

    // id is received from key, click in Pet.js
    onAdoptPet = event => {
      const adoptedPet = this.state.pets.find(pet => pet.id == event)
      adoptedPet.isAdopted = true
      const all= this.state.pets
      this.setState({pets: all})
    }
  

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App
