import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container text-center py-10 mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to <span className='text-red-600'>Shwapno</span></h1>
        <p>This is the landing page.</p>
      </div>
    </>
  );
};

export default Home;
