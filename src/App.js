import { NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>

          Home Screen... This asks for user details.

          </div>
        
          <div>
          <NavLink to="/services">

            Click to go to what you are looking for screen

          </NavLink>

        </div>



      </header>
    </div>
  );
}

export default App;
