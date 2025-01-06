import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaVolleyballBall, FaUsers, FaHandHoldingHeart, FaCalendarAlt, FaClock, FaTrophy } from 'react-icons/fa';
import aboutImage1 from '../../assets/IMGS/asas-01-A85wpVZM9ofDBOLy.avif';
import aboutImage2 from '../../assets/IMGS/asas-02-mnlv3J5rD7iZMG1y.avif';
import sportsImage1 from '../../assets/IMGS/asas-04-AR0yJ31xXbu91ZMg.avif';
import sportsImage2 from '../../assets/IMGS/asas-05-YZ9V2jEgL6h2p4Z2.avif';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden; // Previne scroll horizontal
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: linear-gradient(
    135deg,
    var(--background-100) 0%,
    var(--background-200) 100%
  );
`;

const HeroSection = styled.section`
  width: 100vw; // Garante largura total da viewport
  background: linear-gradient(
    135deg,
    var(--background-300) 0%,
    var(--background-200) 100%
  );
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  min-height: 60vh;
  display: flex;
  align-items: center;

  &::before {
    content: 'ASAS';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(15rem, 30vw, 40rem);
    font-weight: 900;
    opacity: 0.02;
    pointer-events: none;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg,
    var(--primary-200) 0%,
    var(--primary-300) 50%,
    var(--text-100) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const Description = styled.p`
  color: var(--text-200);
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  line-height: 1.8;
  max-width: 800px;
  margin-bottom: 3rem;
`;

const StatsGrid = styled.div`
  width: 100%; // Garante largura total
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const StatCard = styled.div`
  width: 100%; // Garante largura total
  background: rgba(122, 31, 162, 0.1);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(154, 39, 205, 0.2);
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    color: var(--primary-200);
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .number {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(45deg, var(--primary-200), var(--primary-300));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
  }

  .label {
    color: var(--text-200);
    font-size: 1.1rem;
    line-height: 1.4;
  }
`;

const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
`;

const ActivityCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(12, 3, 16, 0.95) 0%,
    rgba(28, 7, 37, 0.9) 100%
  );
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(154, 39, 205, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: var(--primary-200);
    box-shadow: 0 20px 40px rgba(12, 3, 16, 0.3);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ActivityCard}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    color: var(--primary-200);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-200);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const BlogSection = styled.section`
  background: var(--background-100);
  padding: 6rem 2rem;
`;

const BlogPost = styled.article`
  background: linear-gradient(
    135deg,
    rgba(122, 31, 162, 0.1) 0%,
    rgba(154, 39, 205, 0.05) 100%
  );
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(154, 39, 205, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-200);
  }

  h2 {
    font-size: 1.8rem;
    color: var(--primary-200);
    margin-bottom: 1rem;
  }

  .meta {
    color: var(--text-200);
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    opacity: 0.8;
  }
`;

const ImageGallerySection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(
    135deg,
    var(--background-200) 0%,
    var(--background-300) 100%
  );
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.9);

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const Section = styled.section`
  width: 100vw; // Garante largura total da viewport
  padding: 6rem 2rem;
  background: ${props => props.$dark ? 
    'linear-gradient(135deg, var(--background-100) 0%, var(--background-200) 100%)' : 
    'linear-gradient(135deg, var(--background-200) 0%, var(--background-300) 100%)'
  };
  position: relative;
  overflow: hidden;
`;

const Grid = styled.div`
  width: 100%; // Garante largura total
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;

const Content = styled.div`
  width: 100%; // Garante largura total
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Text = styled.p`
  color: var(--text-200);
  line-height: 1.8;
  font-size: 1.1rem;
`;

const InfoCard = styled.div`
  width: 100%; // Garante largura total
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(122, 31, 162, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(154, 39, 205, 0.2);

  svg {
    color: var(--primary-200);
    font-size: 1.5rem;
  }

  h4 {
    color: var(--primary-200);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-200);
    line-height: 1.6;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    transition: all 0.3s ease;
  }
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, var(--primary-200), var(--primary-300));
  color: var(--text-100);
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(122, 31, 162, 0.3);
  }
`;

// Componente principal
export function ActivitiesPage() {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <Title>Nossa proposta, nossos treinos e equipes...</Title>
          <Description>
            Atualmente contamos com quase 500 inscritos, adolescentes, jovens e adultos 
            que participam de nossos treinos vislumbrando compor as equipes do PROJETO 
            ou serem inseridos em outras equipes nas mais diversas localidade em nível nacional.
          </Description>

          <StatsGrid>
            <StatCard>
              <FaUsers className="icon" />
              <div className="number">500+</div>
              <div className="label">Atletas Inscritos</div>
            </StatCard>
            <StatCard>
              <FaVolleyballBall className="icon" />
              <div className="number">2x</div>
              <div className="label">Treinos Semanais</div>
            </StatCard>
            <StatCard>
              <FaTrophy className="icon" />
              <div className="number">4+</div>
              <div className="label">Equipes</div>
            </StatCard>
          </StatsGrid>
        </Container>
      </HeroSection>

<Section>
  <Container>
    <Grid>
      <Content>
        <Title>Treinos Gratuitos</Title>
        <Text>
          Nossos treinos abertos e gratuitos voltados aos iniciantes no voleibol 
          de quadra são realizados sempre nas manhãs de sábados e domingos.
        </Text>
        <InfoCard>
          <FaClock />
          <div>
            <h4>Horários</h4>
            <p>Sábados e Domingos pela manhã</p>
          </div>
        </InfoCard>
        <Button to="/contato">Contate-nos para saber mais →</Button>
      </Content>

      <ImageContainer>
        <img src={aboutImage2} alt="Treinos ASAS" />
      </ImageContainer>
    </Grid>
  </Container>
</Section>

<Section $dark>
  <Container>
    <Grid>
      <ImageContainer>
        <img src={sportsImage1} alt="Equipes ASAS" />
      </ImageContainer>
      <Content>
        <Title>Nossas Equipes</Title>
        <Text>
          Atualmente contamos com Equipes juvenis Masculina, Feminina e estamos 
          trabalhando para, muito em breve lançar nossas equipes juvenis e 
          masters masculina e feminina.
        </Text>
      </Content>
    </Grid>
  </Container>
</Section>

<Section>
  <Container>
    <Grid>
      <Content>
        <Title>Adote um INTEGRANTE ASAS</Title>
        <Text>
          Acredite no PROJETO ASAS! Seja um investidor e adote um integrante ASAS 
          contribuindo voluntária e regularmente com valores a partir de um real.
        </Text>
        <Button to="/contato">Contate-nos para saber mais →</Button>
      </Content>
      <ImageContainer>
        <img src={sportsImage2} alt="Apoie o ASAS" />
      </ImageContainer>
    </Grid>
  </Container>
</Section>

<BlogSection>
  <Container>
    <Title>Blog ASAS</Title>
    
    <BlogPost>
      <h2>Projeto ASAS: Inclusão Social Através do Esporte</h2>
      <div className="meta">
        <span>Por Abraão Belém</span> • <span>7/7/2023</span> • <span>1 min de leitura</span>
      </div>
      <Text>
        Trata-se de um PROJETO social de iniciativa privada, sem fins monetários 
        lucrativos, que promove a prática de esportes coletivos e individuais, 
        vislumbrando melhorias na qualidade de vida de nossos integrantes. 
        Junte-se a nós nessa missão transformadora!
      </Text>
    </BlogPost>

    <BlogPost>
      <h2>Projeto ASAS: Inclusão Social Através do Esporte na Comunidade</h2>
      <div className="meta">
        <span>Por Abraão Belém</span> • <span>24/3/2022</span> • <span>1 min de leitura</span>
      </div>
      <Text>
        NOSSOS OBJETIVOS:<br/>
        • Fortalecer o processo de construção da cidadania<br/>
        • Promover a inclusão social através da prática regular de esportes<br/>
        • Contribuir com o desenvolvimento dos valores do PROJETO<br/>
        • Proporcionar o aprendizado e o aprimoramento dos fundamentos<br/>
        • Promover e participar de competições em diversos níveis
      </Text>
    </BlogPost>
  </Container>
</BlogSection>

<ImageGallerySection>
  <Container>
    <Title>Nossos Momentos</Title>
    <GalleryGrid>
      {[aboutImage1, aboutImage2, sportsImage1, sportsImage2].map((img, index) => (
        <GalleryImage key={index} src={img} alt={`Momento ASAS ${index + 1}`} />
      ))}
    </GalleryGrid>
  </Container>
</ImageGallerySection>
</PageContainer>
);
}