import { useState, useEffect } from 'react';
import styled from 'styled-components';
import image1 from '../../assets/IMGS/asas-02-mnlv3J5rD7iZMG1y (1).avif';
import image2 from '../../assets/IMGS/asas-04-AR0yJ31xXbu91ZMg.avif';
import image3 from '../../assets/IMGS/asas-03-d95Kp4KwPniv9k94.avif';
import image4 from '../../assets/IMGS/asas-04-YX4yPxyp3ztORWXb.avif';

const GallerySection = styled.section`
  background: linear-gradient(
    135deg,
    rgba(44, 11, 59, 0.95) 0%,
    rgba(12, 3, 16, 0.98) 100%
  );
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  
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
      transparent 60%
    );
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Header = styled.div`
  text-align: center;
  position: relative;
  padding: 2rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--primary-200), transparent);
  }
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  background: linear-gradient(135deg,
    var(--primary-200) 0%,
    var(--primary-300) 50%,
    var(--text-100) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  &::before {
    content: 'GALERIA';
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: clamp(4rem, 10vw, 8rem);
    font-weight: 900;
    opacity: 0.03;
    white-space: nowrap;
    z-index: -1;
  }
`;

const Description = styled.p`
  color: var(--text-200);
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 30px;
  overflow: hidden;
  background: rgba(12, 3, 16, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(154, 39, 205, 0.2);
  padding: 2rem;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(154, 39, 205, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, 
      rgba(154, 39, 205, 0.1),
      transparent 40%
    );
    pointer-events: none;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  gap: 2rem;
  padding: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 2px;
    background: linear-gradient(90deg,
      transparent,
      var(--primary-200),
      transparent
    );
  }
`;

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 20px;
  transform: perspective(1000px) rotateY(-5deg);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.95) contrast(1.1);
  
  &:hover {
    transform: perspective(1000px) rotateY(0deg) scale(1.02);
    filter: brightness(1.1) contrast(1.2);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 0 2px rgba(154, 39, 205, 0.3);
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(154, 39, 205, 0.1);
  border: 2px solid rgba(154, 39, 205, 0.2);
  color: var(--text-100);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: rgba(154, 39, 205, 0.2);
    border-color: var(--primary-200);
    transform: translateY(-50%) scale(1.1);
    
    svg {
      transform: scale(1.2);
    }
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 16px;
`;

const NextButton = styled(NavigationButton)`
  right: 16px;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border: none;
  background: ${props => props.$active ? 'var(--primary-200)' : 'rgba(154, 39, 205, 0.2)'};
  border-radius: 6px;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0;
  
  &:hover {
    transform: scale(1.2);
    background: var(--primary-300);
  }
  
  ${props => props.$active && `
    width: 24px;
    background: linear-gradient(90deg, var(--primary-200), var(--primary-300));
  `}
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => (props.$progress * 100)}%;
    background: linear-gradient(
      to right,
      var(--primary-200),
      var(--primary-300)
    );
    transition: width 0.3s linear;
    box-shadow: 0 0 10px rgba(154, 39, 205, 0.5);
  }
`;

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const images = [image1, image2, image3, image4];
  const timePerSlide = 5000;

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 1) {
          return 0;
        }
        return prev + 0.02;
      });
    }, timePerSlide / 50);

    const slideInterval = setInterval(() => {
      nextSlide();
      setProgress(0);
    }, timePerSlide);

    return () => {
      clearInterval(slideInterval);
      clearInterval(progressInterval);
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setProgress(0);
  };

  return (
    <GallerySection>
      <Container>
        <Header>
          <Title>Galeria ASAS</Title>
          <Description>
            Explore nossas atividades e momentos de diversão, inclusão e bem-estar.
          </Description>
        </Header>

        <CarouselContainer>
          <CarouselTrack
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <Slide key={index}>
                <Image 
                  src={image} 
                  alt={`Imagem ${index + 1} do Projeto ASAS`}
                  loading="lazy"
                />
              </Slide>
            ))}
          </CarouselTrack>
          
          <PrevButton onClick={prevSlide} aria-label="Imagem anterior">
            <svg viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
            </svg>
          </PrevButton>
          
          <NextButton onClick={nextSlide} aria-label="Próxima imagem">
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </NextButton>
          
          <ProgressBar $progress={progress} />
        </CarouselContainer>

        <Dots>
          {images.map((_, index) => (
            <Dot
              key={index}
              $active={currentIndex === index}
              onClick={() => {
                setCurrentIndex(index);
                setProgress(0);
              }}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </Dots>
      </Container>
    </GallerySection>
  );
}