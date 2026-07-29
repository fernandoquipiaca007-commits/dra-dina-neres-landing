import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Authority } from './components/Authority';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-text-dark selection:bg-forest/20 selection:text-forest">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Authority />
      </main>
      <Footer />
    </div>
  );
}
