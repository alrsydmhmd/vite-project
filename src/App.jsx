import bg from './assets/background.jpg';

function App() {
  return (
    <>
      <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bg})` }}>
          {/* Hero Section */}

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
              Welcome to Byte & Bite
            </h1>
            <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
              Enjoy the best culinary experience with fresh ingredients and unique recipes.
            </p>
          </div>
      </div>
    </>
  );
}

export default App;
