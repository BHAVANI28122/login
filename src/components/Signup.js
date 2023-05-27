import { useState,useEffect } from "react";

const Signup = () =>{

    
  let [userName,setName] = useState("");
  let [userEmail,setEmail] = useState("");
  let [userPassword,setPassword] = useState("");
  let [confirmed,setConfirmed]=useState("");
  let [error,setError] = useState("")


  function sign(e){
    e.preventDefault();
 
    if(userName !=="" && userEmail !=="" && userPassword !==""){
        if(userPassword === confirmed){
            let info={
                name:userName,
                email:userEmail,
                password:userPassword
            };
            localStorage.setItem("info",JSON.stringify(info));
            window.location.href="/Profile";
        }
    }
    else{
        setError("Error : All the fields are mandatory");
    }


  }

    return(
        <div className="login-form">
        <h1>Signup</h1>
        
        <input type="text" id="username" placeholder="Full Name" onChange={e => setName(e.target.value)} />
        <input type="email" id="useremail" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        <input type="password" id="userpassword" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        <input type="password" id="comfirmPassword" placeholder="Confirm Password"onChange={e => setConfirmed(e.target.value)}/>
        <br />
        <br/>
        {
           error && <div className="error">
            {error}
            </div>
}
        <button className="btn signup" onClick={sign}>Signup</button>
    </div>
    )

}

export default Signup;