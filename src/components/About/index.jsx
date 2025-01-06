import styled from 'styled-components';
import aboutImage from '../../assets/IMGS/asas-02-mnlv3J5rD7iZMG1y.avif';


const AboutSection = styled.section`
    background: linear-gradient(
        to bottom,
        var(--background-100) 0%,
        var(--background-200) 50%,
        var(--background-300) 100%
    );
    padding: 6rem 2rem;
    position: relative;
    overflow: hidden;

    @media (min-width: 768px) {
        padding: 8rem 4rem;
    }
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const Header = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    color: var(--primary-200);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

const Description = styled.p`
  color: var(--text-200);
  line-height: 1.8;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  padding: 2rem;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 3px;
    background: var(--primary-200);
    border-radius: 2px;
  }
  
  &::before {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &::after {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ValuesList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  perspective: 1000px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

const ValueItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  background: linear-gradient(
    135deg,
    rgba(122, 31, 162, 0.08) 0%,
    rgba(154, 39, 205, 0.03) 100%
  );
  border-radius: 24px;
  border: 1px solid rgba(154, 39, 205, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(154, 39, 205, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 0 20px 40px rgba(12, 3, 16, 0.2);
    border-color: var(--primary-200);
    
    &::before {
      transform: translateX(100%);
    }
  }
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-200), var(--primary-300));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transform: rotate(-5deg);
  transition: transform 0.3s ease;
  
  ${ValueItem}:hover & {
    transform: rotate(0deg) scale(1.1);
  }
  
  svg {
    font-size: 1.8rem;
    color: var(--text-100);
  }
`;


const ValueTitle = styled.h3`
  color: var(--primary-200);
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 40px;
    height: 2px;
    background: var(--primary-200);
    transition: width 0.3s ease;
  }
  
  ${ValueItem}:hover &::after {
    width: 100%;
  }
`;

const ValueText = styled.p`
  color: var(--text-200);
  line-height: 1.8;
  font-size: 1.1rem;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    
    &::before {
      content: '✦';
      color: var(--primary-200);
      margin-right: 1rem;
      font-size: 0.8rem;
    }
  }
`;

const ValueHighlight = styled.span`
  color: var(--primary-300);
  font-weight: 600;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    height: 600px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 15%, 100% 85%, 0% 100%);
  transform: scale(1.02);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  filter: contrast(1.1) brightness(1.05);

  &:hover {
    transform: scale(1.05);
    filter: contrast(1.15) brightness(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(122, 31, 162, 0.2) 0%,
    transparent 100%
  );
  z-index: 2;
  pointer-events: none;
  clip-path: polygon(0 0, 100% 15%, 100% 85%, 0% 100%);
`;

const ImageBorder = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid rgba(154, 39, 205, 0.3);
    clip-path: polygon(0 0, 100% 15%, 100% 85%, 0% 100%);
  }
`;

export function About() {
    return (
        <AboutSection>
            <Container>
                <Content>
                    <Header>
                        <Title>Conheça o Projeto ASAS</Title>
                        <Description>
                            Promovemos, incentivamos e solidificamos a qualidade
                            de vida e o bem-estar social por meio da prática
                            regular de esportes, coletivos ou individuais,
                            visando inclusão e melhoria na qualidade de vida na
                            comunidade e região metropolitana.
                        </Description>
                    </Header>

                    <ValuesList>
                        <ValueItem>
                            <ValueTitle>Nossa Missão</ValueTitle>
                            <ValueText>
                                Promover a inclusão social através do esporte,
                                transformando vidas e fortalecendo a comunidade.
                            </ValueText>
                        </ValueItem>

                        <ValueItem>
                            <ValueTitle>Nossa Visão</ValueTitle>
                            <ValueText>
                                Tornar o Projeto ASAS reconhecido por formar
                                bons cidadãos, agentes transformadores nos meios
                                em que forem inseridos, e também por capacitar
                                bons atletas amadores ou profissionais.
                            </ValueText>
                        </ValueItem>

                        <ValueItem>
                            <ValueTitle>Nossos Valores</ValueTitle>
                            <ValueText>
                                • Compromisso, respeito mútuo e dedicação
                                <br />
                                • Aprendizado e renovação contínua
                                <br />• Trabalho em equipe para o bem comum
                            </ValueText>
                        </ValueItem>
                    </ValuesList>
                </Content>

                <ImageWrapper>
                    <AboutImage 
                        src={aboutImage} 
                        alt="Projeto ASAS em ação" 
                        loading="lazy"
                    />
                    <ImageBorder />
                </ImageWrapper>
            </Container>
        </AboutSection>
    );
}
