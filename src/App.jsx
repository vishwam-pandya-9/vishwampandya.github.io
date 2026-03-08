import { ThemeProvider } from './hooks/useTheme';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WorkExperience } from './components/WorkExperience';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <Navigation />
      <Hero />
      <About />
      <WorkExperience />
      <Blog />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
