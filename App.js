import logo from './logo.svg';
import './App.css';
import Idcard from './idcard';
import Idcard2 from './idcard2';
//import background from './images/backgaround.jpg';

function App() {

  return (
    <div className="App" style={{display:"flex"}}>

      <Idcard collname="Faculty of Science "
        name="Jonny Baba M."
        rollno="07"
        Department="M.C.A"
        year="2023 - 2025"/>

      <Idcard2 address = "Kalivalli shop - 4&5, Near Mehtasab Complex, Hirachacha Main Road, Ferani-650152"
              name="Jonny Baba M."
              mobileno = "95756 36654"
              enrollment="253645955"
              aadhar="85413596841"
              dob="12-Jan-1990"
              bgroup="A+"
              location="Yogidham Gurukul, Kalavad Road, Rajkot-360005"
              contact="1800 233 999 999"/>
    
    </div>
  );
}

export default App;
