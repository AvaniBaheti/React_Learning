import React from 'react'
import Counter from './Counter'
class  Pure_Compon extends React.PureComponent {
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }
 render()
 {
  return (
    <div className="Pure_Compon">
     <Counter count={this.state.count} />
      <button 
      onClick={()=>{this.setState({count:this.state.count+1})}}
      >Update Count</button>
    </div>
  );
  }
}

export default Pure_Compon;