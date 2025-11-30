import '@mf/ui/theme.css';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import About from './pages/About';
import Home from './pages/Home';
import RemoteApp from './pages/RemoteApp';

const App = () => {
  return (
    <div className="min-h-screen p-8">
      <nav className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Host App (MF1)</h1>
        <div className="space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-blue-600 hover:underline">
            About
          </Link>
          <Link to="/remote" className="text-blue-600 hover:underline">
            Remote App
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/remote/*" element={<RemoteApp />} />
      </Routes>
    </div>
  );
};

export default App;
