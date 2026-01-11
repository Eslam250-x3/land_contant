import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolCard from './components/ToolCard';
import Footer from './components/Footer';
import Background from './components/Background';
import { tools } from './data/tools';

function App() {
  useEffect(() => {
    // Smooth entry animation
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100 + 200);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      <Background />

      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-16 relative z-10">
        <Hero />

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;


