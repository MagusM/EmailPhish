import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.js'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
