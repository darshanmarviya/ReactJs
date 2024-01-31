import img from './images/man.jpg';
import imga from './images/atmiya.png';
import imgcode from './images/barcode.png';
import background from './images/background.jpg';


function Idcard2(props)
{
    return(
        <>
            <div style={{width:"300px", height:"550px", border:"3px solid black", borderRadius:"10px", marginTop:"4%", marginLeft:"8%",backgroundImage:`url(${background})`,backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
            <div style={{height:"18px", background:"#3f4dcc", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <div style={{height:"18px", background:"#cc37bd", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <img src={imga} height="80px" style={{marginTop:"3px"}}></img>

                <div style={{display:"flex",marginTop:"8px"}}>
                <p style={{marginLeft:"5px"}}><b><u>Address</u></b></p>
                <p style={{marginLeft:"15px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px", fontSize:"14px", marginTop:"18px"}}>{props.address}</p>
                </div>
                
                <div style={{display:"flex",marginTop:"-17px"}}>
                <p style={{marginLeft:"5px"}}><b><u>Mobile Number</u></b></p> 
                <p style={{marginLeft:"5px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px"}}>{props.mobileno}</p>
                </div>


                <div style={{display:"flex",marginTop:"-17px"}}>
                <p style={{marginLeft:"5px"}}><b><u>Aadhar Card</u></b></p>
                <p style={{marginLeft:"5px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px"}}>{props.aadhar}</p>
                </div>

                <div style={{display:"flex",marginTop:"-17px"}}>
                <p style={{marginLeft:"5px"}}><b><u>Blood Group</u></b></p>
                <p style={{marginLeft:"5px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px"}}>{props.bgroup}</p>
                </div>

                <div style={{display:"flex",marginTop:"-17px"}}>
                <p style={{marginLeft:"5px"}}><b><u>Enrollment No</u></b></p>
                <p style={{marginLeft:"5px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px"}}>{props.enrollment}</p>
                </div>

                <div style={{display:"flex",marginTop:"-17px"}}>
                <p style={{marginLeft:"5px"}}><b><u>Date of Birth</u></b></p>
                <p style={{marginLeft:"5px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px"}}>{props.dob}</p>
                </div>

                <div style={{fontSize:"12px"}}>
                <p>ID Card is compulsory on Campus</p>
                </div>

                <div style={{height:"5px", background:"#3f4dcc", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <div style={{display:"flex"}}>
                <p style={{marginLeft:"5px",fontSize:"14px"}}><b>{props.location}</b></p>
                </div>

                <div style={{height:"15px", background:"#3f4dcc", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <div style={{height:"15px", background:"#cc37bd", border:"0.2px solid white", borderRadius:"5px"}}></div>


            </div>
        </>

    );

}
export default Idcard2;
