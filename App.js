import logo from './logo.svg';
import './App.css';
import Idcard from './idcard';
import Idcard2 from './idcard2';
//import background from './images/backgaround.jpg';

function App() {

  return (
    <div className="App" style={{display:"flex"}}>

      <Idcard collname="Faculty of Science "
        name="Jonny Baba"
        rollno="07"
        Department="M.C.A"
        Enrollmentnumber="230651421"/>

      <Idcard2 address = "Kalivalli shop - 4&5, Near Mehtasab Complex, Hirachacha Main Road, Ferani-650152"
              mobileno = "95756 36654"
              email="jonnybaba1212@gmail.com"
              registration="89541536259"
              bgroup="A+"/>
    
    </div>
  );
}

export default App;
