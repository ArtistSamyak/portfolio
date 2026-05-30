import Hero from './components/Hero';
import Experience from './components/Experience';
import Showcase from './components/Showcase';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20">
      <Hero />
      <Experience />
      <Showcase />
      <Skills />
      <Footer />
    </main>
  );
}
