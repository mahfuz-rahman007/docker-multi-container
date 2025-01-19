import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <header>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>

        <div>
          <Routes>
            <Route exact path="/" element={<Fib/>} />
            <Route path="/otherpage" element={<OtherPage/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
