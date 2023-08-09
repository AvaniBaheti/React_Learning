import React from 'react'
import { createRef } from 'react';
class Chck extends React.Component {
  constructor(){
    super();
    this.ams=createRef();
  }
  componentDidMount(){
    // console.log(this.ams.current.value="1000");
  }
  geVal(){
  console.log(this.ams.current.value)
  this.ams.current.style.color="green"
  }
  render()
  {
    return (
        <div>userefs_class
           <input type="text" ref={this.ams} /> 
           <button onClickCapture={()=>this.geVal()}>CheckRef</button>
        </div>
      );
  }
}
export default Chck;