import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import headerImage from '../../assets/IMGS/asas-cabecalho-site-mv0DlNg9r6SV3GXB.avif';
import { FaHome, FaInfoCircle, FaRunning, FaEnvelope, FaUserPlus } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: rgba(12, 3, 16, 0.95);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: ${(props) => (props.$isScrolled ? '65px' : '80px')};
  border-bottom: 1px solid rgba(154, 39, 205, 0.1);

  &::before {
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

  @media (min-width: 768px) {
    padding: 0.75rem 2rem;
  }
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 1rem;
  padding: 0 1rem;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transform: scale(${(props) => (props.$isScrolled ? '0.9' : '1')});
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 2px;
    background: linear-gradient(45deg, var(--primary-200), transparent);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const LogoImage = styled.img`
  height: 45px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(1.1);

  &:hover {
    transform: scale(1.05) rotate(-3deg);
    filter: brightness(1.2);
  }
`;

const LogoText = styled.h1`
    color: var(--primary-200);
    font-size: 1.5rem;
    font-weight: bold;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: none;

    @media (min-width: 768px) {
        display: block;
        font-size: 2rem;
    }

    &:hover {
        color: var(--primary-300);
        text-shadow: 0 0 15px rgba(154, 39, 205, 0.3);
    }
`;

const NavLinks = styled.div`
  display: none;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.button`
  display: block;
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  z-index: 1000;
  cursor: pointer;
  transition: all 0.3s ease;

  &::before,
  &::after,
  span {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: var(--text-100);
    left: 8px;
    transition: all 0.3s ease;
  }

  &::before {
    top: 15px;
  }

  &::after {
    bottom: 15px;
  }

  span {
    top: 19px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-100);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;

  svg {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(154, 39, 205, 0.1);
    
    svg {
      transform: translateY(-2px);
    }
  }

  &.active {
    background: rgba(154, 39, 205, 0.15);
    color: var(--primary-200);
    
    svg {
      color: var(--primary-200);
    }
  }
`;

const ContactButton = styled(Link)`
  background: linear-gradient(45deg, var(--primary-200), var(--primary-300));
  color: var(--text-100);
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  
  svg {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: var(--primary-200);
    box-shadow: 0 8px 16px rgba(122, 31, 162, 0.2);
    
    svg {
      transform: rotate(15deg);
    }
  }
`;

// Adicione estes novos componentes estilizados após os existentes

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(12, 3, 16, 0.98) 0%,
    rgba(28, 7, 37, 0.96) 100%
  );
  backdrop-filter: blur(10px);
  padding: 5rem 2rem 2rem;
  transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999; // Ajustado para ficar abaixo do botão
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  animation: ${props => props.$isOpen ? 'slideIn 0.6s forwards 0.3s' : 'none'};

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MobileNavLink = styled(NavLink)`
  font-size: 1.5rem;
  padding: 1rem;
  width: 100%;
  text-align: center;
  opacity: 0.8;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0.5rem;
    width: 0;
    height: 2px;
    background: var(--primary-200);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    opacity: 1;
    transform: translateY(-3px);
    
    &::after {
      width: 30px;
    }
  }
`;

const MobileContactButton = styled(ContactButton)`
    width: 100%;
    margin-top: 0.5rem;
    text-align: center;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: transparent;
  border: none;
  width: 100%;
  padding: 1rem;
  color: var(--text-100);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin-bottom: 2rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: var(--text-100);
    transition: all 0.3s ease;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  span {
    margin-left: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
  }

  &:hover {
    background: rgba(154, 39, 205, 0.1);
    transform: translateY(-3px);
    
    &::before,
    &::after {
      background: var(--primary-200);
    }
    
    span {
      color: var(--primary-200);
    }
  }
`;
export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Função para fechar o menu ao clicar em um link
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <HeaderContainer $isScrolled={isScrolled}>
                <Nav>
                    <LogoContainer to="/" $isScrolled={isScrolled}>
                        <LogoImage src={headerImage} alt="Logo ASAS" />
                    </LogoContainer>
                    <NavLinks>
                        <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
                            <FaHome />Início
                        </NavLink>
                        <NavLink to="/sobre" className={location.pathname === "/sobre" ? "active" : ""}>
                            <FaInfoCircle />Sobre
                        </NavLink>
                        <NavLink to="/atividades" className={location.pathname === "/atividades" ? "active" : ""}>
                            <FaRunning />Atividades
                        </NavLink>
                        <NavLink to="/contato" className={location.pathname === "/contato" ? "active" : ""}>
                            <FaEnvelope />Contato
                        </NavLink>
                        <ContactButton to="/inscricao">
                            <FaUserPlus />Inscreva-se
                        </ContactButton>
                    </NavLinks>
                    <MobileMenu
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        $isOpen={isMobileMenuOpen}
                    >
                        <span></span>
                    </MobileMenu>
                </Nav>
            </HeaderContainer>

            <MobileMenuContainer
                $isOpen={isMobileMenuOpen}
                $isScrolled={isScrolled}
            >
                <MobileNavLinks $isOpen={isMobileMenuOpen}>
                    <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
                        <span></span>
                    </CloseButton>
                    <MobileNavLink to="/" onClick={handleLinkClick}>
                        <FaHome />
                        Início
                    </MobileNavLink>
                    <MobileNavLink to="/sobre" onClick={handleLinkClick}>
                        <FaInfoCircle />
                        Nossa Proposta
                    </MobileNavLink>
                    <MobileNavLink to="/atividades" onClick={handleLinkClick}>
                        <FaRunning />
                        Treinos e Equipes
                    </MobileNavLink>
                    <MobileNavLink to="/contato" onClick={handleLinkClick}>
                        <FaEnvelope />
                        Contato
                    </MobileNavLink>
                    <MobileContactButton to="/inscricao" onClick={handleLinkClick}>
                        <FaUserPlus />
                        Inscreva-se
                    </MobileContactButton>
                </MobileNavLinks>
            </MobileMenuContainer>
        </>
    );
}
