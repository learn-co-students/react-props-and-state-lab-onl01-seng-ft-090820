import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  // handleAdopt = (id) => {
  //   this.props.onAdoptPet(id) 
  // } 

  // renderPet = () => {
  //   this.props.pets.map(p => {
  //     return <Pet onAdoptPet={this.handleAdopt} pet={p} /> 
  //   })

  // }

  render() {
    const renderPet = this.props.pets.map(p => (<Pet onAdoptPet={this.props.onAdoptPet} pet={p} key={p.id} />) )
    return ( 
    <div className="ui cards">{renderPet}
    
    </div>
    )
  }
}

export default PetBrowser
