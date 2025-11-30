import { Button } from '@mf/ui';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Host App Home</h2>
      <p className="mb-4">Welcome to the host application (mf1)</p>
      <Button variant="destructive" className="mb-4">
        UI Package Button
      </Button>
      <nav className="space-x-4">
        <Link to="/about" className="text-blue-500 hover:underline">
          About Host
        </Link>
        <Link to="/remote" className="text-blue-500 hover:underline">
          Go to Remote App →
        </Link>
      </nav>
    </div>
  );
};

export default Home;
