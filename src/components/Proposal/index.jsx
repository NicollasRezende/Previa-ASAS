import styled from 'styled-components';
import { Link } from 'react-router-dom';
import treinos from '../../assets/IMGS/asas-01-YanyBJyvPDUQGxgQ.avif';
import equipes from '../../assets/IMGS/asas-05-dOqybDyoXxhOLoEx.avif';
import acredite from '../../assets/IMGS/asas-01-YanyBJyvPDUQGxgQ.avif';

const ProposalSection = styled.section`
  background: linear-gradient(
    135deg,
    var(--background-100) 0%,
    var(--background-200) 50%,
    var(--background-300) 100%
  );
  padding: 4rem 1rem; // Reduzido padding em mobile
  
  @media (min-width: 768px) {
    padding: 8rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: 768px) {
    gap: 4rem;
  }
`;

const Header = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding: 2rem 1rem; // Reduzido padding lateral em mobile
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem); // Fonte responsiva
  margin-bottom: 1rem;
  background: linear-gradient(135deg,
    var(--primary-200) 0%,
    var(--primary-300) 50%,
    var(--text-100) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  
  &::after {
    content: 'ASAS';
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 8rem;
    opacity: 0.03;
    z-index: -1;
    white-space: nowrap;
  }
`;

const Subtitle = styled.h3`
  font-size: clamp(1.2rem, 3vw, 2rem); // Fonte responsiva
  color: var(--text-100);
  margin-bottom: 2rem;
  font-weight: 600;
  
  span {
    color: var(--primary-200);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--primary-200);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 0 1rem;
  background: linear-gradient(
    135deg,
    rgba(122, 31, 162, 0.1) 0%,
    rgba(154, 39, 205, 0.05) 100%
  );
  border-radius: 20px;
  backdrop-filter: blur(10px);
`;

const StatItem = styled.div`
  text-align: center;
  
  .number {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: var(--primary-200);
    margin-bottom: 0.5rem;
    background: linear-gradient(45deg, var(--primary-200), var(--primary-300));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .label {
    color: var(--text-200);
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    line-height: 1.4;
  }
`;

const Description = styled.p`
  color: var(--text-200);
  line-height: 1.8;
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  strong {
    color: var(--primary-200);
    font-weight: 600;
  }
  
  &::before,
  &::after {
    content: '"';
    font-size: 4rem;
    color: var(--primary-200);
    opacity: 0.2;
    position: absolute;
  }
  
  &::before {
    top: 0;
    left: 0;
  }
  
  &::after {
    bottom: 0;
    right: 0;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; // Por padrão mostra 1 coluna em mobile
  gap: 2rem;
  padding: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // Tablet: 2 colunas
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); // Desktop: 3 colunas
    gap: 3rem;
  }
`;

const Card = styled.div`
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(12, 3, 16, 0.9) 0%,
    rgba(28, 7, 37, 0.8) 100%
  );
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(154, 39, 205, 0.2);
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(12, 3, 16, 0.2);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(122, 31, 162, 0.3);
    border-color: var(--primary-200);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    height: 240px;
  }

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const CardTitle = styled.h4`
  color: var(--primary-200);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const CardText = styled.div`
  color: var(--text-200);
  font-size: 1rem;
  line-height: 1.8;
  flex: 1;

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    display: flex;
    align-items: flex-start;
    padding-left: 1.5rem;
    position: relative;
    
    &::before {
      content: "•";
      color: var(--primary-200);
      position: absolute;
      left: 0;
      font-size: 1.2em;
    }
  }
`;

const ContactLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-200);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  margin-top: auto;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  width: fit-content;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--primary-200);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--primary-300);
    transform: translateX(5px);

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const StyledStrong = styled.strong`
  margin: 0 0.5rem;
  color: var(--primary-200);
`;

export function Proposal() {
  return (
    <ProposalSection>
      <Container>
        <Header>
          <Title>Nossa Proposta</Title>
          <Subtitle>
            Muito mais que um <span>TIME</span>!
          </Subtitle>
          
          <StatsContainer>
            <StatItem>
              <div className="number">500+</div>
              <div className="label">Atletas Inscritos</div>
            </StatItem>
            <StatItem>
              <div className="number">100%</div>
              <div className="label">Treinos Gratuitos</div>
            </StatItem>
            <StatItem>
              <div className="number">2X</div>
              <div className="label">Treinos Semanais</div>
            </StatItem>
          </StatsContainer>
          
          <Description>
            No <strong>Projeto ASAS</strong>, transformamos vidas através do esporte. 
            Nossos treinos são mais que práticas esportivas - são oportunidades de 
            crescimento para <strong>adolescentes</strong>, <strong>jovens</strong> e 
            <strong>adultos</strong> que sonham em se desenvolver no voleibol. 
            Oferecemos um ambiente inclusivo e profissional, preparando atletas para 
            brilharem nas quadras em <strong>nível nacional</strong>.
          </Description>
        </Header>

        <CardsContainer>
          <Card>
            <CardImage src={treinos} alt="Treinos ASAS" />
            <CardContent>
              <CardTitle>Treinos Abertos e Gratuitos</CardTitle>
              <CardText>
                <ul>
                  <li>Treinamentos especializados para iniciantes no voleibol de quadra</li>
                  <li>Atividades realizadas nas manhãs de sábados e domingos</li>
                  <li>Acompanhamento profissional e metodologia própria</li>
                </ul>
                <ContactLink to="/sobre">Saiba um pouco mais →</ContactLink>
              </CardText>
            </CardContent>
          </Card>

          <Card>
            <CardImage src={equipes} alt="Equipes ASAS" />
            <CardContent>
              <CardTitle>Nossas Equipes</CardTitle>
              <CardText>
                <ul>
                  <li>Equipes Masculinas e Femininas Juvenis</li>
                  <li>Preparação para competições regionais e estaduais</li>
                  <li>Em breve: equipes juvenis e masters masculina e feminina</li>
                </ul>
                <ContactLink to="/atividades">Conheça nossas atividades →</ContactLink>
              </CardText>
            </CardContent>
          </Card>

          <Card>
            <CardImage src={acredite} alt="Acredite no ASAS" />
            <CardContent>
              <CardTitle>Acredite no PROJETO ASAS!</CardTitle>
              <CardText>
                <p>
                  Seja um investidor e adote um integrante ASAS contribuindo voluntária 
                  e regularmente com valores a partir de um real.
                </p>
                <p>
                  <strong>Contate-nos para saber mais...</strong>
                </p>
                <ContactLink to="/contato">Quero contribuir →</ContactLink>
              </CardText>
            </CardContent>
          </Card>
        </CardsContainer>
      </Container>
    </ProposalSection>
  );
}