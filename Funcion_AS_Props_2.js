import logo from './logo.svg';
import './Props_AS_Funcion_2.css';
import Props_AS_Funcion from './Props_AS_Funcion'
import Student from './Student'
function Props_AS_Funcion_2() {
 
  function getData() {
    alert("Hello from Props_AS_Funcion_2 component")
  }
  return (
    <div className="Props_AS_Funcion_2">
     <User  data={getData} />
     <Student data={getData} />
    </div>
  );
}

export default Props_AS_Funcion_2;