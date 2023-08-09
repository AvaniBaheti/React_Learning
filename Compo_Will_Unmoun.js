import React from 'react'
import './Compo_unmoun.css';
import React from 'react'
import Student from './Student'
class Compo_unmoun extends React.Component {
  constructor()
  {
    super();
    this.state={
      show:true
    }
  }
  render() {
    return (
      <div className="Compo_unmoun">
        {
          this.state.show?<Student />
          :<h4>Component is removed</h4>
        }
        <button onClick={()=>this.setState({show:false})}> Toogle Student Component</button>
      </div>
    )
  }
}

export default Compo_unmoun;
