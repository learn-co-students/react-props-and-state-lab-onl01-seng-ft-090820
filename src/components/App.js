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

  changeFilters = (e) => {
    this.setState = ({
      filters: {
        type: e.target.value
      }
    })
  }

  fetchPets = () => {
    let url = ""
    if (this.state.filters.type === "all") {
      url = "/api/pets"
    } else {
      url = "/api/pets?type=" + this.state.filters.type
    }
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      this.setState ({
        pets: data
      })
    })
  }

  adoptPet = (e) => {
    let rescuedPet = this.state.pets.find(pet => pet.id == e)
    rescuedPet.isAdopted = true 
    this.setState({
      pets: this.state.pets
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
              <Filters onChangeType={this.changeFilters} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
