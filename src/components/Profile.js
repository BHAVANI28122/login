

const Profile = () =>{

  


    let result = JSON.parse(localStorage.getItem("info"));
     console.log(result);
   
   
     function logout(){
   
       localStorage.removeItem("info");
       window.location.href="/Signup";
       
      
     }
   
       return(
           <div>
             <h1>Profile</h1>
             <p>Full Name: {result.name}</p>
             <p>Email :{result.email} </p>
             <p>Password :{result.password} </p>
             <button className="btn logout" onClick={logout}>Logout</button>
           </div>
       )
   
   }
   
   export default Profile;