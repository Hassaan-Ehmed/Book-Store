import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import History from './pages/History';
import Fantasy from './pages/Fantasy';
import Romance from './pages/Romance';
import Sci_Fi from './pages/Sci_Fi';
import Advanture from './pages/Advanture';
import Self_Dev from './pages/Self_Dev';

import Home from './pages/Home';
import User from './pages/User';
import Favourite from './pages/Favourite';
import Download from './pages/Download';


function App() {
  return (
    <> 

<Router>

<Navbar/> 
<Routes>

<Route path={"/"} element={<Home/>}/>

<Route  path='/Favourite' element={<Favourite/>}/>

<Route path='/Download' element={<Download/>}/>

<Route path="/History" element={<History/>} />

<Route path="/Fantasy" element={<Fantasy/>}/>

<Route  path="/Romance" element={<Romance/>}/>

<Route path="/Sci-Fi" element={<Sci_Fi/>}/>

<Route path="/Advanture" element={<Advanture/>}/>

<Route path="/Self-Dev" element={<Self_Dev/>}/>

{/* Dynamic Routes */}
<Route path="/user/:name" element={<User/> }/>

{/* IF any routes above are not matched so below one is Rendered !  */}

<Route path="*" element={<h1 className='text-6xl text-center p-52'>PAGE NOT FOUND : 404 </h1>}/>


</Routes>


<Footer/>

</Router>



    </>
  );
}

export default App;
