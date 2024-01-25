import logo from './logo.svg';
import './App.css';
import Idcard from './idcard';
import Idcard2 from './idcard2';

function App() {
  return (
    <div className="App" style={{display:"flex"}}>

      <Idcard collname="Faculty of Science "
        name="Darshan Maraviya"
        rollno="33"
        Department="M.C.A"
        Enrollmentnumber="230651421"/>

      <Idcard2 address = "Nana Mava Main Road, Near Kalavad Road, Rajkot-360005"
              mobileno = "95756 36654"
              email="atmiya.darsh.15618223062@gmail.com"
              registration="15618223062"
              bgroup="A+"/>
    
    </div>
  );
}

export default App;
