import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import aboutImage1 from '../../assets/IMGS/asas-02-mnlv3J5rD7iZMG1y.avif';
import aboutImage2 from '../../assets/IMGS/asas-03-d95Kp4KwPniv9k94.avif';
import sportsImage1 from '../../assets/IMGS/asas-04-AR0yJ31xXbu91ZMg.avif';
import sportsImage2 from '../../assets/IMGS/asas-05-YZ9V2jEgL6h2p4Z2.avif';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw; // Garante largura total da viewport
  background: linear-gradient(
    135deg,
    var(--background-100) 0%,
    var(--background-200) 100%
  );
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px; // Aumentado para melhor uso do espaço
  margin: 0 auto;
  padding: 4rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  width: 100%; // Garante largura total
  background: linear-gradient(
    135deg,
    var(--background-300) 0%,
    var(--background-200) 100%
  );
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
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

  &::after {
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

const Section = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.$dark ? 
    'linear-gradient(135deg, var(--background-100) 0%, var(--background-200) 100%)' : 
    'linear-gradient(135deg, var(--background-200) 0%, var(--background-300) 100%)'
  };
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  
  @media (min-width: 768px) {
    grid-template-columns: ${props => props.$columns || '1fr 1fr'};
    gap: 6rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  position: relative;
  z-index: 2;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  animation: fadeIn 0.8s ease-out forwards;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  position: relative;
  margin-bottom: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 60px;
    height: 60px;
    background: var(--primary-200);
    opacity: 0.1;
    border-radius: 12px;
    transform: rotate(-45deg);
  }

  background: linear-gradient(135deg,
    var(--primary-200) 0%,
    var(--primary-300) 50%,
    var(--text-100) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled.p`
  color: var(--text-200);
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  line-height: 1.8;
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 3px;
    height: calc(100% - 1rem);
    background: var(--primary-200);
    border-radius: 4px;
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
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  width: fit-content;
  position: relative;
  overflow: hidden;
  
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
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(122, 31, 162, 0.3);
    border-color: var(--primary-200);
    
    &::before {
      transform: translateX(100%);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: 1;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    transform: perspective(1000px) rotateY(-5deg);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    
    &:hover {
      transform: perspective(1000px) rotateY(0deg) scale(1.02);
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(45deg, var(--primary-200), transparent);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const OverlappingImages = styled.div`
  position: relative;
  height: 500px;

  img:first-child {
    position: absolute;
    width: 80%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  img:last-child {
    position: absolute;
    width: 60%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    top: 20%;
    left: 40%;
    z-index: 2;
  }
`;

const LocationSection = styled(Section)`
  background: var(--background-100);
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 2rem;
  border: 2px solid var(--primary-200);
`;

const InfoCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(122, 31, 162, 0.1) 0%,
    rgba(154, 39, 205, 0.05) 100%
  );
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(154, 39, 205, 0.2);
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  svg {
    color: var(--primary-200);
    font-size: 1.5rem;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(122, 31, 162, 0.1);
  border-radius: 20px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }

  .number {
    font-size: 3rem;
    font-weight: 800;
    color: var(--primary-200);
    margin-bottom: 0.5rem;
    background: linear-gradient(45deg, var(--primary-200), var(--primary-300));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .label {
    color: var(--text-200);
    font-size: 1.1rem;
  }
`;

export function AboutPage() {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <Grid>
            <Content>
              <Title>
                Sobre o<br />
                Projeto ASAS
              </Title>
              <Text>
                A proposta do PROJETO ASAS surgiu em meados de 2018 a partir da iniciativa 
                de dois amigos que foram divulgando, expandindo e conquistando novos adeptos 
                da proposta. O que resultou no início das atividades em novembro de 2020 
                no Gama/DF.
              </Text>
              <Text>
                Atualmente o PROJETO ASAS conta com cinco INTEGRANTES envolvidos diretamente 
                na COORDENAÇÃO e seus respectivos setores (Secretaria, Comunicação Social, 
                Financeiro e Patrimônio) e quase 500 inscritos.
              </Text>
              
              <StatsContainer>
                <StatItem>
                  <div className="number">500+</div>
                  <div className="label">Atletas Inscritos</div>
                </StatItem>
                <StatItem>
                  <div className="number">5</div>
                  <div className="label">Coordenadores</div>
                </StatItem>
                <StatItem>
                  <div className="number">2018</div>
                  <div className="label">Ano de Fundação</div>
                </StatItem>
              </StatsContainer>
              
              <Button to="/contato">
                Junte-se a nós! 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </Content>
            <ImageContainer>
              <img src={aboutImage1} alt="Projeto ASAS" loading="eager" />
            </ImageContainer>
          </Grid>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <Grid>
            <OverlappingImages>
              <img src={aboutImage1} alt="Atividades ASAS 1" />
              <img src={aboutImage2} alt="Atividades ASAS 2" />
            </OverlappingImages>
            <Content>
              <Title>Nossa Missão</Title>
              <Text>
                Promover, incentivar e solidificar qualidade de vida e bem-estar social 
                através da prática regular de esportes, coletivos ou individuais, visando 
                inclusão e melhoria na qualidade de vida em nossa comunidade e região 
                metropolitana.
              </Text>
            </Content>
          </Grid>
        </Container>
      </Section>

      <Section $dark>
        <Container>
          <Grid>
            <Content>
              <Title>Projeto ASAS</Title>
              <Text>
                Iniciativa social que promove inclusão e qualidade de vida.
              </Text>
            </Content>
            <ImageContainer>
              <img src={sportsImage1} alt="Atividades esportivas" />
            </ImageContainer>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid $columns="1fr 1fr 1fr">
            <Content>
              <Title>Esportes Coletivos</Title>
              <Text>
                Através de esportes coletivos, buscamos unir a comunidade e promover 
                a inclusão social, melhorando a qualidade de vida de todos os 
                participantes e fortalecendo os laços comunitários.
              </Text>
            </Content>
            <ImageContainer>
              <img src={sportsImage1} alt="Esportes coletivos" />
            </ImageContainer>
            <Content>
              <Title>Esportes Individuais</Title>
              <Text>
                Oferecemos atividades esportivas individuais que incentivam o 
                desenvolvimento pessoal e a saúde, proporcionando oportunidades para 
                que cada membro da comunidade possa se destacar e melhorar seu bem-estar.
              </Text>
            </Content>
          </Grid>
        </Container>
      </Section>

      <LocationSection>
        <Container>
          <Title>Localização</Title>
          <Text>
            Atualmente nossos treinos são realizados apenas no Gama/DF, porém 
            vislumbramos estendê-los em outras cidades muito em breve, estendendo 
            os laços na promoção de inclusão e bem-estar social, melhorando a 
            qualidade de vida em nossa comunidade através da prática regular de esportes.
          </Text>
          
          <InfoCard>
            <FaMapMarkerAlt />
            <Text>
              Gama/DF, Setor Leste, Setor Oeste e Setor Norte.
            </Text>
          </InfoCard>
          
          <InfoCard>
            <FaClock />
            <Text>
              Nas manhãs de sábados e domingos
            </Text>
          </InfoCard>

          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.765164446226!2d-48.06074668514784!3d-16.008944588905947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAwJzMyLjIiUyA0OMKwMDMnMzUuOSJX!5e0!3m2!1spt-BR!2sbr!4v1635789012345!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapContainer>
        </Container>
      </LocationSection>
    </PageContainer>
  );
}