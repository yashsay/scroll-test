import logo from './logo.svg';
import './App.css';
import ScrollableContent from './ScrollableContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <h1>Scrollable Content Demo</h1>
      <ScrollableContent>
        {[...Array(30)].map((_, i) => (
          <p key={i}>This is line {i + 1} of scrollable content.</p>
        ))}
      </ScrollableContent>
    </div>
  );
}

export default App;
