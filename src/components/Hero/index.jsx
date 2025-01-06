import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import heroImage from '../../assets/IMGS/asas-01-A85wpVZM9ofDBOLy.avif';

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(
    135deg,
    var(--background-300) 0%,
    var(--background-200) 50%,
    var(--background-100) 100%
  );
  overflow: hidden;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 30% 50%,
      rgba(122, 31, 162, 0.1) 0%,
      transparent 50%
    );
  }

  @media (min-width: 768px) {
    padding: 8rem 4rem;
  }
`;

const HeroContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, var(--primary-200) 5%, transparent 60%);
    opacity: 0.3;
    filter: blur(20px);
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TitleWrapper = styled.div`
  position: relative;

  &::after {
    content: 'ASAS';
    position: absolute;
    top: -0.5rem;
    left: -1rem;
    font-size: 12rem;
    font-weight: 900;
    opacity: 0.03;
    z-index: -1;
    pointer-events: none;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    135deg,
    var(--primary-200) 0%,
    var(--primary-300) 50%,
    var(--text-100) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: var(--text-200);
  line-height: 1.6;
  max-width: 540px;
  position: relative;
  padding-left: 1rem;
  border-left: 3px solid var(--primary-200);
`;

const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  background: rgba(12, 3, 16, 0.6);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(154, 39, 205, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(154, 39, 205, 0.1) 100%
    );
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--primary-200),
      transparent
    );
  }
`;

const CTATitle = styled.h2`
  font-size: 1.5rem;
  color: var(--primary-200);
  font-weight: 700;
  letter-spacing: -0.01em;
`;

const CTAText = styled.p`
  color: var(--text-200);
  line-height: 1.8;
  font-size: 1.1rem;

  strong {
    color: var(--primary-200);
    font-weight: 600;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, var(--primary-200), var(--primary-300));
  color: var(--text-100);
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
    z-index: -1;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(122, 31, 162, 0.3);
    border-color: var(--primary-200);
  }

  &:active {
    transform: translateY(-1px);
  }

  svg {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const Stars = styled.div`
  color: var(--primary-200);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  
  @media (min-width: 1024px) {
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--background-200);
      clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
      opacity: 0.5;
    }
  }
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  transform: perspective(1000px) rotateY(-5deg);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

  @media (min-width: 1024px) {
    border-radius: 0;
    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
  }

  &:hover {
    transform: perspective(1000px) rotateY(0deg) scale(1.02);
  }
`;

export function Hero() {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <TitleWrapper>
            <Title>Projeto ASAS</Title>
            <Subtitle>
              Inclusão social através do esporte buscando melhoria na qualidade de vida
              na comunidade com excelência.
            </Subtitle>
          </TitleWrapper>
          
          <CallToAction>
            <CTATitle>Participe do Projeto</CTATitle>
            <CTAText>
              Junte-se a nós!<br />
              Torne-se um <strong>INTEGRANTE ASAS</strong>!
            </CTAText>
            <CTAButton to="/contato">
              Saiba como... <FaArrowRight />
            </CTAButton>
          </CallToAction>
        </HeroContent>

        <ImageContainer>
          <HeroImg 
            src={heroImage} 
            alt="Projeto ASAS em ação"
            loading="eager"
          />
        </ImageContainer>
      </HeroContainer>
    </HeroSection>
  );
}