  
import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const renderPet = this.props.pets.map(p => (<Pet onAdoptPet={this.props.onAdoptPet} pet={p} key={p.id} />) )
    return ( 
    <div className="ui cards">{renderPet}
    
    </div>
    )
  }
}

export default PetBrowser
