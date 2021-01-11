import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
  //  return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>
  
  const pets= this.props.pets.map( pet => (
    <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
  ))
  return <div className="ui cards">{pets}</div>
  }
}

export default PetBrowser
