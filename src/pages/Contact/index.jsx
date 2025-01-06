import styled from 'styled-components';
import { useState } from 'react';
import essencialLogo from '../../assets/IMGS/essencial.avif';
import teletronLogo from '../../assets/IMGS/icon-logo-teletron.avif';
import troiaLogo from '../../assets/IMGS/troia.avif';
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const PageContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    var(--background-300) 0%,
    var(--background-200) 100%
  );
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: 'CONTATO';
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
  max-width: 1200px;
  margin: 0 auto;
`;

const SupportersSection = styled.section`
  padding: 6rem 2rem;
  background: var(--background-100);
`;

const SupportersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SupporterCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(122, 31, 162, 0.1) 0%,
    rgba(154, 39, 205, 0.05) 100%
  );
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  border: 1px solid rgba(154, 39, 205, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-200);
    box-shadow: 0 20px 40px rgba(12, 3, 16, 0.2);
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 60px;
    margin-bottom: 1.5rem;
    border: 3px solid var(--primary-200);
    padding: 5px;
  }

  h3 {
    color: var(--primary-200);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-200);
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(
    135deg,
    var(--background-200) 0%,
    var(--background-300) 100%
  );
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--text-200);
  font-size: 1.1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(154, 39, 205, 0.2);
  background: rgba(12, 3, 16, 0.6);
  color: var(--text-100);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-200);
    box-shadow: 0 0 0 2px rgba(154, 39, 205, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(154, 39, 205, 0.2);
  background: rgba(12, 3, 16, 0.6);
  color: var(--text-100);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-200);
    box-shadow: 0 0 0 2px rgba(154, 39, 205, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(45deg, var(--primary-200), var(--primary-300));
  color: var(--text-100);
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(122, 31, 162, 0.3);
  }
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
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
    margin-top: 0.25rem;
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

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  background: linear-gradient(135deg,
    var(--primary-200) 0%,
    var(--primary-300) 50%,
    var(--text-100) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid var(--primary-200);
  margin-top: 2rem;
`;

const SupportButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #25D366, #128C7E);
  color: var(--text-100);
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  
  svg {
    font-size: 1.3rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
    border-color: #25D366;
    
    svg {
      transform: rotate(15deg);
    }
  }
`;

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implemente a lógica de envio do formulário aqui
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <Title>Conheçam nossos apoiadores</Title>
          <SupportersGrid>
            <SupporterCard>
              <img src={teletronLogo} alt="TELETRON" loading="lazy" />
              <h3>TELETRON</h3>
              <p>Indústria e Comércio Ltda.</p>
            </SupporterCard>
            <SupporterCard>
              <img src={troiaLogo} alt="TROIA" loading="lazy" />
              <h3>TROIA</h3>
              <p>Distribuição e Logística</p>
            </SupporterCard>
            <SupporterCard>
              <img src={essencialLogo} alt="Essencial" loading="lazy" />
              <h3>Essencial</h3>
              <p>Sinalização Visual</p>
            </SupporterCard>
          </SupportersGrid>
          
          <div style={{ textAlign: 'center' }}>
            <SupportButton 
              href="https://api.whatsapp.com/send/?phone=556121951088&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              Apoie o Projeto ASAS
            </SupportButton>
          </div>
        </Container>
      </HeroSection>

      <ContactSection>
        <Container>
          <ContactGrid>
            <div>
              <Title>Entre em contato conosco</Title>
              <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Seu nome completo</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Seu e-mail para contato*</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail aqui"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Sua mensagem ou dúvida*</Label>
                  <TextArea
                    name="message"
                    placeholder="Escreva sua mensagem aqui"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <SubmitButton type="submit">Enviar mensagem</SubmitButton>
              </ContactForm>
            </div>

            <LocationInfo>
              <InfoCard>
                <FaMapMarkerAlt />
                <div>
                  <h4>Localização</h4>
                  <p>
                    Gama/DF, Setor Leste, Setor Oeste e Setor Norte.
                  </p>
                </div>
              </InfoCard>

              <InfoCard>
                <FaClock />
                <div>
                  <h4>Horários</h4>
                  <p>Nas manhãs de sábados e domingos</p>
                </div>
              </InfoCard>

              <InfoCard>
                <FaEnvelope />
                <div>
                  <h4>E-mail</h4>
                  <p>asasvoleigama@gmail.com</p>
                </div>
              </InfoCard>

              <InfoCard>
                <FaPhone />
                <div>
                  <h4>Telefone</h4>
                  <p>+55 61 2195.1090</p>
                </div>
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
            </LocationInfo>
          </ContactGrid>
        </Container>
      </ContactSection>
    </PageContainer>
  );
}