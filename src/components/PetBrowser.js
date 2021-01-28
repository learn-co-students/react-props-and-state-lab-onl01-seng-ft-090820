import React from "react";
import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    const eachPet = this.props.pets
    return (
      <div className="ui cards">
        {eachPet.map((pet) => <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />)}
      </div>
    );
  }
}

export default PetBrowser;
