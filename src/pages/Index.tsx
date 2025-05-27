
import PortfolioSection from '@/components/PortfolioSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white">
      {/* You can add a Navbar or Header component here if you like */}
      {/* <header className="w-full py-4 bg-gray-800 text-white text-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
      </header> */}
      
      <PortfolioSection />

      {/* You can add a Footer component here */}
      {/* <footer className="w-full py-8 bg-gray-800 text-white text-center mt-auto">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Index;
