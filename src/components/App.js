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

  updateFilters = event => {
    const newFilter = event.target.value 
    this.setState({
      filters: {
        type: newFilter
      }
    })
  }

  fetchPets = () => {
    let url = ""
    if ((this.state.filters.type == 'all')) {
      url = '/api/pets'
    } else {
      url = '/api/pets?type=' + this.state.filters.type 
    }
    fetch(url)
    .then(res => res.json())
    .then(obj => {
      this.setState({
        pets: obj 
      })
    })
  }

  changeAdoptionStatus = event => {
    const adoptedPet = this.state.pets.find(pet => pet.id == event)
    adoptedPet.isAdopted = true
    const petsArr = this.state.pets 
    this.setState({
      pets: petsArr
    })
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
              <Filters onChangeType={this.updateFilters} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.changeAdoptionStatus} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
