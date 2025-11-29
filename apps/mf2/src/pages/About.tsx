import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">About Remote App</h2>
      <p className="mb-4">This is the about page inside the remote app</p>
      <Link to=".." className="text-blue-500 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
};

export default About;
