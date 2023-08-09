import logo from './logo.svg';
import './App.css';
import Props_Funcion_2 from './Props_Funcion_2'
import React from 'react'
class Abcd extends React.Component {
  constructor()
  {
    super();
    this.state={
      name:"Anil"
    }
  }
  render()
  {
    return (
      <div className="App">
       <h1>Props !</h1>
       <Student name={this.state.name} email="anil@test.com"></Student>
       <button onClick={()=>this.setState({name:"Sidhu"})} >Update Name</button>
      </div>
    );
  }
}

export default Abcd;