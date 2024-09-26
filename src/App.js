
import Dashboard from './Components/Dashboard';
import EmployeeList from './Components/EmployeeList';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/dashboard"  element={<Dashboard/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/employeeList" element={<EmployeeList/>} />
      </Routes>
    </div>
  );
}

export default App;
