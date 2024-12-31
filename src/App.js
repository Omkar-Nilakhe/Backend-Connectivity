
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { ConnectApi } from './ConnectApi';
import ApiFun from './ApiFun';
import ApiClass from './ApiClass';

function App() {
  return (
    <div className="App">
      <Router>
      <Link to="emps">All Employees</Link><br></br>
      <Link to="employees">useEffect Api</Link><br></br>
      <Link to="employee1">ComponentDidMount Api</Link><br></br>
      <Routes>
      <Route path='/emps' Component={ConnectApi}></Route>
      <Route path='/employees' Component={ApiFun}></Route>
      <Route path='/employee1' Component={ApiClass}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
