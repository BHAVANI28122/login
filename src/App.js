import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
  return (
   <div>
     <Routes>

if(localStorage.getItem("info")){

  <Route path='/Profile' element={<Profile />}></Route>
}
else{


<Route path='/Signup' element={<Signup />}> 
</Route>
}


</Routes>
    </div>
  );
}

export default App;
