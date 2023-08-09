import './Comp_Did_Mount.css';
import React from 'react'
class Comp_Did_Mount extends React.Component {
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={name:"anil"}
  }
  componentDidMount()
  {
    console.warn("componentDidMount")

  }
  render()
  {
    console.warn("render")

    return (
      <div className="Comp_Did_Mount">
        <h1>Component Did Mount {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Sidhu"})}>Update</button>
      </div>
    );
  }
}

export default Comp_Did_Mount;