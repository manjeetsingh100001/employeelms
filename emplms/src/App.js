import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Home} from "./components/Home"
import { Navbar } from './components/Navbar';
import { Admin } from './components/Admin';
import { EmployeeList } from './components/EmployeeList';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/employees" element={<EmployeeList/>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
