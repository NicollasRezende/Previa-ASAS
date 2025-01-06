// src/components/ScrollReveal.jsx
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const AnimatedContainer = styled.div`
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

    &.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;

export function ScrollReveal({ children, threshold = 0.1, delay = 0 }) {
    const { ref, inView } = useInView({
        threshold,
        triggerOnce: true,
    });

    return (
        <AnimatedContainer
            ref={ref}
            className={inView ? 'visible' : ''}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </AnimatedContainer>
    );
}
