import styled from 'styled-components';

const PageContainer = styled.div`
    padding-top: 80px;
    min-height: 100vh;
    width: 100vw; // Garante largura total da viewport
    background: linear-gradient(
        135deg,
        var(--background-100) 0%,
        var(--background-200) 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center; // Centraliza o conteúdo horizontalmente
`;

const ContentContainer = styled.div`
    width: 100%;
    max-width: 1200px; // Aumentado para melhor uso do espaço
    margin: 0 auto;
    padding: 4rem 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center; // Centraliza o conteúdo
`;

const Header = styled.header`
    width: 100%; // Ocupa toda a largura disponível
    text-align: center;
    margin-bottom: 6rem;
    position: relative;
    padding: 3rem;
    background: rgba(122, 31, 162, 0.03);
    border-radius: 30px;
    border: 1px solid rgba(154, 39, 205, 0.1);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(
            90deg,
            transparent,
            var(--primary-200),
            transparent
        );
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(
            90deg,
            transparent,
            var(--primary-200),
            transparent
        );
    }
`;

const Title = styled.h1`
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    background: linear-gradient(
        135deg,
        var(--primary-200) 0%,
        var(--primary-300) 50%,
        var(--text-100) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: var(--primary-200);
        border-radius: 2px;
    }
`;

const UpdateDate = styled.p`
    color: var(--text-200);
    font-size: 1.1rem;
    opacity: 0.8;
    font-style: italic;
    margin-top: 2rem;

    &::before {
        content: 'Última atualização: ';
        font-weight: 500;
        color: var(--primary-200);
    }
`;

const Section = styled.section`
    width: 100%; // Ocupa toda a largura disponível
    margin-bottom: 4rem;
    padding: 3rem clamp(1.5rem, 4vw, 3rem);
    background: rgba(122, 31, 162, 0.03);
    border-radius: 20px;
    border: 1px solid rgba(154, 39, 205, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(to bottom, var(--primary-200), transparent);
    }

    &:hover {
        background: rgba(122, 31, 162, 0.05);
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(12, 3, 16, 0.1);
    }
`;

const SectionTitle = styled.h2`
    color: var(--primary-200);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    padding-left: 2rem;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 12px;
        height: 12px;
        background: var(--primary-200);
        border-radius: 50%;
    }
`;

const Text = styled.p`
    color: var(--text-200);
    line-height: 2;
    font-size: 1.1rem;
    margin-bottom: 2rem;
    padding-left: 2rem;
    letter-spacing: 0.02em;
    width: 100%; // Garante largura total

    strong {
        color: var(--primary-200);
        font-weight: 600;
    }
`;

const List = styled.ul`
    width: 100%; // Garante largura total
    list-style: none;
    padding: 0 0 0 2rem;
    margin: 2rem 0;

    li {
        color: var(--text-200);
        line-height: 1.8;
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
        padding-left: 2rem;
        position: relative;
        width: 100%; // Garante largura total

        &::before {
            content: '→';
            color: var(--primary-200);
            position: absolute;
            left: 0;
            font-weight: bold;
        }
    }
`;

const ContactInfo = styled.div`
    width: 100%; // Garante largura total
    background: linear-gradient(
        135deg,
        rgba(122, 31, 162, 0.08) 0%,
        rgba(154, 39, 205, 0.03) 100%
    );
    padding: 3rem;
    border-radius: 20px;
    margin-top: 4rem;
    border: 1px solid rgba(154, 39, 205, 0.2);
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(12, 3, 16, 0.1);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--primary-200), transparent);
    }

    h3 {
        color: var(--primary-200);
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        font-weight: 700;
    }

    p {
        color: var(--text-200);
        line-height: 1.8;
        margin-bottom: 1rem;
        width: 100%; // Garante largura total
    }

    a {
        color: var(--primary-200);
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 1px;
            background: var(--primary-200);
            transform: scaleX(0);
            transition: transform 0.3s ease;
            transform-origin: right;
        }

        &:hover {
            color: var(--primary-300);

            &::after {
                transform: scaleX(1);
                transform-origin: left;
            }
        }
    }
`;

const Signature = styled.div`
    text-align: center;
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(154, 39, 205, 0.2);

    p {
        color: var(--text-200);
        margin-bottom: 0.5rem;
    }

    strong {
        color: var(--primary-200);
        font-size: 1.2rem;
    }
`;

export function PrivacyPage() {
    return (
        <PageContainer>
            <ContentContainer>
                <Header>
                    <Title>POLÍTICA DE PRIVACIDADE – PROJETO ASAS</Title>
                    <UpdateDate>16 de julho de 2024</UpdateDate>
                </Header>

                <Section>
                    <Text>
                        Esta Política de Privacidade se refere aos dados
                        pessoais que o PROJETO ASAS poderá, eventualmente, obter
                        das pessoas interessadas em conhecer ou ingressar neste.
                    </Text>

                    <Text>
                        Ao aceitar a presente Política de Privacidade é
                        declarado que todo o seu conteúdo foi devidamente lido e
                        aceito, tendo assim todas as cláusulas devidamente
                        validadas pela pessoa interessada para que atuem em
                        pleno vigor.
                    </Text>

                    <Text>
                        Esclarecemos que esta Política de Privacidade poderá ser
                        atualizada a qualquer tempo, a exclusivo critério dos
                        setores do PROJETO, porém toda e qualquer alteração será
                        oportunamente informada e disponibilizada para nova
                        validação, de modo que - caso permaneçam envolvidos com
                        o PROJETO - estarão de acordo com os termos desta
                        política.
                    </Text>
                </Section>

                <Section>
                    <SectionTitle>Olá, seja bem-vindo(a)!</SectionTitle>
                    <Text>
                        Talvez você não conheça o PROJETO ASAS, mas se chegou
                        até esse documento é porque provavelmente utilizou uma
                        ferramenta de pesquisa online ou de mensagens
                        instantâneas, navegou em um de nossos ambientes
                        virtuais, em nossas mídias sociais ou web site no
                        intuito de nos conhecer ou até mesmo ingressar no
                        PROJETO, tornando-se um INTEGRANTE e usufruir dos
                        benefícios que nossas atividades proporcionam.
                    </Text>

                    <Text>
                        Por isso, queremos esclarecer quem somos, o que fazemos,
                        como eventualmente colhemos e tratamos seus dados
                        pessoais. Sinta-se "em casa" e fique tranquilo(a), pois
                        levamos sua privacidade muito a sério e transmitiremos a
                        seguir toda a transparência e segurança necessária no
                        tratamento destes dados.
                    </Text>
                    <Text>
                        Em caso de dúvidas ou se precisar nos solicitar algum de
                        seus direitos, é sempre um grande prazer lhe atender e,
                        para isso, basta nos enviar um e-mail a qualquer momento
                        para asasvoleigama@gmail.com.
                    </Text>
                </Section>

                <Section>
                    <SectionTitle>
                        É obrigatório aceitar esta Política de Privacidade?
                    </SectionTitle>
                    <Text>
                        Não! Não precisa clicar em nenhuma caixinha, responder
                        "Li e aceito", ou dar qualquer forma de consentimento ao
                        PROJETO. Essa Política de Privacidade é aplicada no
                        intuito de conscientizar e informar que temos acesso a
                        alguns dados pessoais e que eventualmente poderão ser
                        armazenados mediante o aceite dos termos desta política.
                    </Text>
                    <Text>
                        Na ausência de consentimento do usuário com esta
                        política e os termos relacionados aos dados pessoais
                        eventualmente coletados e armazenados, fica o
                        interlocutor interessado impedido de ingressar nos
                        grupos de mensagens instantâneas do PROJETO e, por
                        consequência, limitado no que se refere ao acesso e
                        participação nas atividades conduzidas por este.
                    </Text>
                </Section>

                <Section>
                    <SectionTitle>
                        O que significa aceitar esta Política de Privacidade?
                        Quais dados são coletados?
                    </SectionTitle>
                    <Text>
                        Aceitando nossa Política de Privacidade, fica concedido,
                        por livre e espontânea vontade, a permissão para a
                        coleta e armazenamento dos dados pessoais, ora
                        fornecidos ou informados, que serão tratados da seguinte
                        forma:
                    </Text>
                    <List>
                        <li>
                            Poderão ser coletados, armazenados e tratados os
                            dados de contato (nome e telefone) quando o(a)
                            interessado(a) nos contactar através de aplicativo
                            de mensagens (Whatsapp) em nossa central de
                            atendimento automático com assistente virtual
                            através do número (61) 2195.1090.
                        </li>
                        <li>
                            Poderão ser coletados, armazenados e tratados os
                            dados de contato (nome e e-mail) quando o(a)
                            interessado(a) enviar e-mail para
                            asasvoleigama@gmail.com.
                        </li>
                        <li>
                            Poderão ser coletados, armazenados e tratados os
                            dados de contato (nome, telefone, e-mail, endereço,
                            data de nascimento) quando o(a) interessado(a)
                            sinalizar interesse em ingressar no PROJETO,
                            solicitar, preencher nosso Formulário de Cadastro
                            online e nos enviar.
                        </li>
                    </List>
                    <Text>
                        Não serão coletados dados sensíveis de nossos
                        integrantes, assim entendidos aqueles definidos nos
                        artigos 11 e seguintes da Lei Geral de Proteção de
                        Dados. Assim sendo, não haverá coleta, em hipótese
                        alguma, de dados sobre origem racial ou étnica,
                        convicção religiosa, opinião política, filiação a
                        sindicato ou a organização de caráter religioso,
                        filosófico ou político, dado referente à saúde, à vida
                        sexual, dado genético ou biométrico quando vinculado a
                        uma pessoa natural.
                    </Text>
                </Section>

                <Section>
                    <SectionTitle>Quem somos e o que fazemos?</SectionTitle>
                    <Text>
                        Trata-se de um PROJETO social poliesportivo de
                        iniciativa privada, sem fins monetários lucrativos,
                        inicialmente voltado à prática de voleibol de quadra e
                        na formação de equipes consolidadas e aptas para a
                        disputa de torneios e campeonatos locais e regionais.
                        Acreditamos fortemente que a prática regular de esportes
                        é uma ferramenta de inclusão social e de melhoria na
                        qualidade de vida em nossa comunidade.
                    </Text>
                </Section>

                <Section>
                    <SectionTitle>
                        Quais são os direitos baseados na Lei Geral de Proteção
                        de Dados?
                    </SectionTitle>
                    <Text>
                        O PROJETO ASAS faz questão de frisar a importância dos
                        seus direitos e gostaríamos de ressaltar que, conforme a
                        legislação, sinta-se a vontade para solicitar a qualquer
                        momento:
                    </Text>
                    <List>
                        <li>
                            Confirmação da existência de tratamento dos seus
                            dados;
                        </li>
                        <li>
                            Acesso aos seus dados pessoais por nós armazenados;
                        </li>
                        <li>
                            Correção de dados incompletos, inexatos ou
                            desatualizados;
                        </li>
                        <li>
                            Exclusão dos dados pessoais, sempre que possível.
                        </li>
                    </List>
                </Section>

                <ContactInfo>
                    <h3>Entre em Contato</h3>
                    <p>
                        Para realizar quaisquer solicitações, requisições ou
                        sanar eventuais dúvidas, basta nos enviar um e-mail ou
                        contatar nossa Ouvidoria:
                    </p>
                    <p>
                        Email:{' '}
                        <a href="mailto:asasvoleigama@gmail.com">
                            asasvoleigama@gmail.com
                        </a>
                        <br />
                        Central de Atendimento:{' '}
                        <a href="tel:+556121951090">(61) 2195.1090</a>
                    </p>
                </ContactInfo>

                <Signature>
                    <p>Gama - Brasília/DF, 16 de julho de 2024.</p>
                    <strong>PROJETO ASAS – Muito mais que um TIME!</strong>
                </Signature>
            </ContentContainer>
        </PageContainer>
    );
}
