import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Pet from './Pet'

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

  setFilter = (data) => {
    this.setState(previousState => {
      return {
        ...previousState,
        filters: {
          type: data
        }
      }
    })
  }

  fetchPets = () => {
    let url = '/api/pets'
    if(this.state.filters.type != 'all'){ 
      url += `?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(resp => resp.json())
    .then(petsData =>
      this.setState(previousState => {
        return {
          ...previousState, 
          pets: petsData
        }
      })
    )} 

  setAdopted = (id) => {
    let pets = this.state.pets.map(p => {
      return p.id === id ? {...p, isAdopted: true} : p 
      })
    // let adoptedPet = this.state.pets.filter(p => p.id === id)[0]
    // let adoptedPet[isAdopted] = 'true'
    this.setState({ 
        // ...previousState,
        pets: pets
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
              <Filters onChangeType={this.setFilter} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.setAdopted}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
