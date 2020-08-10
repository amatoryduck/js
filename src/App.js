import React from 'react';
//import './App.css';
import NavBar from './components/NavBar/NavBar'
import Machine from './components/Machine/Machine'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" media="all"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>
      <script>var Alert = ReactBootstrap.Alert;</script>  
      </header>
      <NavBar />
      <br></br><br></br>
      <Machine />
    </div>
  );
}



export default App;
