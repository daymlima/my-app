import logo from './logo.svg';
import './App.css';

const ReactLogo = () => {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  )
}
const ReactText = (props) => {
   return ( 
    <p>{props.children}</p>
    )
}
const ReactLink = (props) => {

    return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children || 'Veja a documentação!'}
    </a>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactLink />
        <ReactLogo />
        <ReactText children='Edit src/App.js and save to reload.'/>
        <ReactLink> Segundo link</ReactLink>
      
      </header>
    </div>
  );
}

export default App;
