// This component represents the home/landing page of the application
const Home = () => {
  return (
    // Main container for the hero section, centered both horizontally and vertically
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Main heading for the application */}
      <h1 className="text-4xl font-bold">Culinary Compass</h1>
      {/* Sub-heading describing the purpose of the app */}
      <p className="mt-4 text-xl">Your guide to delicious meals and smart planning.</p>
    </div>
  );
};

export default Home;