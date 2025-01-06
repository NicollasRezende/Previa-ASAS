import styled from 'styled-components';
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

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background: var(--background-100);
`;

const MainContent = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <GlobalStyles />
        <Header />
        <MainContent>
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
        </MainContent>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;