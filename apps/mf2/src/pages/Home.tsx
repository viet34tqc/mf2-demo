import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Remote App Home</h2>
      <p className="mb-4">This is the home page of the remote app (mf2)</p>
      <nav className="space-x-4">
        <Link to="about" className="text-blue-500 hover:underline">
          About
        </Link>
        <Link to="dashboard" className="text-blue-500 hover:underline">
          Dashboard
        </Link>
      </nav>
    </div>
  );
};

export default Home;
