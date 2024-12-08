import logo from './logo.svg';
import './App.css';

const BrokenComponent = () => {
  const obj = {}
  return <button onClick={() => obj.trqw.sadfsd = 1}>Break the world</button>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrokenComponent />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
