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


function App() {
  return (
    <> 
    {/* off-white > FFFDD0 || Maroon-type >> AF1B3F  || Purple-type >> 473144 */}



<Router>

<Navbar/>


<Routes>

<Route path={"/"} element={<Home/>}/>

<Route path="/History" element={<History/>} />

<Route path="/Fantasy" element={<Fantasy/>}/>

<Route  path="/Romance" element={<Romance/>}/>

<Route path="/Sci-Fi" element={<Sci_Fi/>}/>

<Route path="/Advanture" element={<Advanture/>}/>

<Route path="/Self-Dev" element={<Self_Dev/>}/>



</Routes>


<Footer/>

</Router>



    </>
  );
}

export default App;
