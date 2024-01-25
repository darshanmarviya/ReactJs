import img from './images/man.jpg';
import imga from './images/atmiya.png';
import imgcode from './images/barcode.png';


function Idcard2(props)
{
    return(
        <>
            <div style={{width:"300px", height:"550px", border:"3px solid black", borderRadius:"10px", marginTop:"4%", marginLeft:"8%"}}>
            <div style={{height:"18px", background:"orange", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <div style={{height:"18px", background:"green", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <img src={imga} height="80px" style={{marginTop:"8px"}}></img>

                <div style={{display:"flex"}}>
                <p style={{marginLeft:"5px"}}><b>Address</b></p>
                <p style={{marginLeft:"5px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px"}}>{props.address}</p>
                </div>
                
                <div style={{display:"flex"}}>
                <p style={{marginLeft:"5px"}}><b>Mobile Number : </b></p> 
                <p style={{marginLeft:"5px"}}>{props.mobileno}</p>
                </div>

                <div style={{display:"flex"}}>
                <p style={{marginLeft:"5px"}}><b>Email</b></p>
                <p style={{marginLeft:"5px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px", fontSize:"13.5px", marginTop:"17px"}}>{props.email}</p>
                </div>

                <div style={{display:"flex"}}>
                <p style={{marginLeft:"5px"}}><b>Registration Number</b></p>
                <p style={{marginLeft:"5px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px", fontSize:"13.5px", marginTop:"17px"}}>{props.registration}</p>
                </div>

                <div style={{display:"flex"}}>
                <p style={{marginLeft:"5px"}}><b>Blood Group</b></p>
                <p style={{marginLeft:"5px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px", fontSize:"13.5px", marginTop:"18px"}}>{props.bgroup}</p>
                </div>

                <div style={{height:"15px", background:"orange", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <div style={{height:"15px", background:"green", border:"0.2px solid white", borderRadius:"5px"}}></div>
            </div>
        </>

    );

}

function Idcard3(props)
{
    return(
        <>
            <div style={{width:"300px", height:"550px", border:"3px solid black", borderRadius:"10px", marginTop:"4%", marginLeft:"8%"}}>
            <div style={{height:"18px", background:"orange", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <div style={{height:"18px", background:"green", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <img src={imga} height="80px" style={{marginTop:"8px"}}></img>

                <div style={{display:"flex"}}>
                <p style={{marginLeft:"5px"}}><b>Address</b></p>
                <p style={{marginLeft:"5px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px"}}>{props.address}</p>
                </div>
                
                <div style={{display:"flex"}}>
                <p style={{marginLeft:"5px"}}><b>Mobile Number : </b></p> 
                <p style={{marginLeft:"5px"}}>{props.mobileno}</p>
                </div>

                <div style={{display:"flex"}}>
                <p style={{marginLeft:"5px"}}><b>Email</b></p>
                <p style={{marginLeft:"5px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px", fontSize:"13.5px", marginTop:"17px"}}>{props.email}</p>
                </div>

                <div style={{display:"flex"}}>
                <p style={{marginLeft:"5px"}}><b>Registration Number</b></p>
                <p style={{marginLeft:"5px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px", fontSize:"13.5px", marginTop:"17px"}}>{props.registration}</p>
                </div>

                <div style={{display:"flex"}}>
                <p style={{marginLeft:"5px"}}><b>Blood Group</b></p>
                <p style={{marginLeft:"5px"}}><b>:</b></p> 
                <p style={{marginLeft:"5px", fontSize:"13.5px", marginTop:"18px"}}>{props.bgroup}</p>
                </div>

                <div style={{height:"15px", background:"orange", border:"0.2px solid white", borderRadius:"5px"}}></div>
                <div style={{height:"15px", background:"green", border:"0.2px solid white", borderRadius:"5px"}}></div>
            </div>
        </>

    );
}

export default Idcard2;