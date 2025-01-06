import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import headerImage from '../../assets/IMGS/asas-cabecalho-site-mv0DlNg9r6SV3GXB.avif';

const FooterSection = styled.footer`
  background: linear-gradient(
    to bottom,
    var(--background-200) 0%,
    var(--background-300) 100%
  );
  padding: 6rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      var(--primary-200),
      transparent
    );
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 1.5fr 1fr 1fr;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoText = styled.h2`
  color: var(--primary-200);
  font-size: 2rem;
  font-weight: 800;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h3`
  color: var(--primary-200);
  font-size: 1.5rem;
  font-weight: 700;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--primary-200);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  transition: all 0.3s ease;
  border-radius: 8px;

  &:hover {
    background: rgba(154, 39, 205, 0.1);
    transform: translateX(5px);
  }

  svg {
    color: var(--primary-200);
    font-size: 1.2rem;
  }

  a {
    color: var(--text-200);
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-200);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const SocialIcon = styled.a`
  color: var(--text-200);
  font-size: 1.3rem;
  transition: all 0.3s ease;
  padding: 0.8rem;
  border-radius: 50%;
  background: rgba(154, 39, 205, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;

  &:hover {
    color: var(--primary-200);
    transform: translateY(-3px);
    background: rgba(154, 39, 205, 0.2);
    box-shadow: 0 5px 15px rgba(154, 39, 205, 0.2);
  }
`;

const LegalContainer = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: var(--text-200);
  font-size: 0.9rem;
  opacity: 0.8;
`;

const PrivacyLink = styled(Link)`
  color: var(--primary-200);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    color: var(--primary-300);
    transform: translateX(5px);
  }
`;

export function Footer() {
  return (
    <FooterSection>
      <FooterContent>
        <LogoSection>
          <LogoContainer>
            <LogoText>ASAS</LogoText>
          </LogoContainer>
          <SocialLinks>
            <SocialIcon 
              href="https://www.instagram.com/asasvoleigama/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIcon>
            <SocialIcon 
              href="https://www.youtube.com/@asasvoleigama" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </SocialIcon>
            <SocialIcon 
              href="https://api.whatsapp.com/send/?phone=556121951090&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </SocialIcon>
          </SocialLinks>
        </LogoSection>

        <ContactContainer>
          <Title>ATENDIMENTO ASAS</Title>
          <ContactItem>
            <FaEnvelope />
            <a href="mailto:asasvoleigama@gmail.com">
              asasvoleigama@gmail.com
            </a>
          </ContactItem>
          <ContactItem>
            <FaPhone />
            <a href="tel:+556121951090">
              +55 61 2195.1090
            </a>
          </ContactItem>
        </ContactContainer>

        <LegalContainer>
          <Copyright>
            PROJETO ASAS © 2018-2024
            <br />
            Todos os direitos reservados.
          </Copyright>
          <PrivacyLink to="/privacidade">
            Política de Privacidade →
          </PrivacyLink>
        </LegalContainer>
      </FooterContent>
    </FooterSection>
  );
}