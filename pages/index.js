import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Shwapno</h1>
        <p>This is the landing page.</p>
      </div>
    </>
  );
};

export default Home;
