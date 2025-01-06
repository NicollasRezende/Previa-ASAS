import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Proposal } from './components/Proposal';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { GlobalStyles } from './styles/GlobalStyles';
import { AboutPage } from './pages/About';
import { ActivitiesPage } from './pages/Activities';
import { ContactPage } from './pages/Contact';
import { PrivacyPage } from './pages/Privacy/Privacy';
import { RegistrationPage } from './pages/Registration';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Proposal />
            <Gallery />
          </>
        } />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/atividades" element={<ActivitiesPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/privacidade" element={<PrivacyPage />} />
        <Route path="/inscricao" element={<RegistrationPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;