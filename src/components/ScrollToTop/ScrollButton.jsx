import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = styled.button`
  position: fixed;
  bottom: ${props => props.$show ? '2rem' : '-5rem'};
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, var(--primary-200), var(--primary-300));
  border: none;
  border-radius: 50%;
  color: var(--text-100);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.$show ? '1' : '0'};
  z-index: 99;
  box-shadow: 0 4px 12px rgba(122, 31, 162, 0.25);
  border: 2px solid transparent;
  transform: scale(${props => props.$show ? '1' : '0.5'});

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    bottom: ${props => props.$show ? '1.5rem' : '-5rem'};
    right: 1.5rem;

    svg {
      font-size: 2.5rem; // Aumentado o tamanho do ícone no mobile
    }
  }

  svg {
    font-size: 2rem; // Tamanho padrão do ícone
    transition: transform 0.3s ease;
    color: var(--text-100); // Garantindo a cor do ícone
    display: block; // Garante que o ícone seja exibido corretamente
  }

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 6px 16px rgba(122, 31, 162, 0.3);
    border-color: var(--primary-200);
    
    svg {
      transform: translateY(-2px);
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--primary-200), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: 0.4;
  }
`;

export function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <ScrollButton 
            onClick={scrollToTop} 
            $show={show}
            aria-label="Voltar ao topo"
            title="Voltar ao topo"
        >
            <FaArrowUp />
        </ScrollButton>
    );
}
