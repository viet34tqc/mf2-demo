import { Outlet, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

const Layout = () => {
  return (
    <div className="p-6 border-2 border-blue-500 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Remote App (MF2)</h1>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
