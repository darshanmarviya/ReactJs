import img from './images/man.jpg';
import imga from './images/atmiya.png';
import imgcode from './images/barcode.png';
//import back from './images/background.jpg';
//import image from './images/background.jpg'; 


function Idcard(props)
{
    return(
        <>
            <div style={{width:"300px", height:"550px", border:"3px solid black", borderRadius:"10px", marginTop:"4%", marginLeft:"8%", /*backgroundImage:`url(${image})` */}}>
                <div style={{height:"18px", background:"orange", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <div style={{height:"18px", background:"green", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <img src={imga} height="80px" style={{marginTop:"3px"}}></img>
                <p><b><u>{props.collname}</u></b></p>
                <img src={img} height="82px"></img>
                <p>{props.name}</p>
                <p>{props.Department}</p>
                <p>{props.rollno}</p>
                <p>{props.Enrollmentnumber}</p>
                <div style={{height:"15px", background:"orange", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <div style={{height:"15px", background:"green", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <img src={imgcode} height="100px"></img>
            </div>
        </>
    );
}
export default Idcard;
