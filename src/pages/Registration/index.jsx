import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

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

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    text-align: center;
    margin-bottom: 4rem;
`;

const Title = styled.h1`
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    background: linear-gradient(
        135deg,
        var(--primary-200) 0%,
        var(--primary-300) 50%,
        var(--text-100) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem;
`;

const Form = styled.form`
    width: 100%; // Garante largura total
    display: grid;
    gap: 2rem;
    background: rgba(122, 31, 162, 0.05);
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid rgba(154, 39, 205, 0.1);
`;

const FormSection = styled.div`
    display: grid;
    gap: 1.5rem;
`;

const SectionTitle = styled.h2`
    color: var(--primary-200);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
        font-size: 1.2rem;
    }
`;

const FormGroup = styled.div`
    display: grid;
    gap: 0.5rem;
`;

const Label = styled.label`
    color: var(--text-200);
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
        color: var(--primary-200);
    }
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

const Select = styled.select`
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

const CheckboxContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    background: rgba(122, 31, 162, 0.1);
    border-radius: 8px;
`;

const CheckboxInput = styled.input`
    margin-top: 0.25rem;
`;

const CheckboxLabel = styled.label`
    color: var(--text-200);
    font-size: 0.9rem;
    line-height: 1.6;

    a {
        color: var(--primary-200);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
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
    border: 2px solid transparent;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(122, 31, 162, 0.3);
        border-color: var(--primary-200);
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
    }
`;

const ErrorMessage = styled.span`
    color: #ff4444;
    font-size: 0.9rem;
    margin-top: 0.25rem;
`;

export function RegistrationPage() {
    const [formData, setFormData] = useState({
        name: '',
        birthDate: '',
        gender: '',
        cpf: '',
        rg: '',
        phone: '',
        whatsapp: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        emergencyContact: '',
        emergencyPhone: '',
        healthIssues: '',
        acceptTerms: false,
        acceptPrivacyPolicy: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'Nome é obrigatório';
        if (!formData.birthDate)
            newErrors.birthDate = 'Data de nascimento é obrigatória';
        if (!formData.cpf) newErrors.cpf = 'CPF é obrigatório';
        if (!formData.phone) newErrors.phone = 'Telefone é obrigatório';
        if (!formData.email) newErrors.email = 'E-mail é obrigatório';
        if (!formData.acceptTerms)
            newErrors.acceptTerms = 'Você deve aceitar os termos de uso';
        if (!formData.acceptPrivacyPolicy)
            newErrors.acceptPrivacyPolicy =
                'Você deve aceitar a política de privacidade';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Implementar a lógica de envio do formulário
            console.log('Formulário válido:', formData);
        }
    };

    const InfoCard = styled.div`
        background: linear-gradient(
            135deg,
            rgba(122, 31, 162, 0.1) 0%,
            rgba(154, 39, 205, 0.05) 100%
        );
        border-radius: 20px;
        border: 1px solid rgba(154, 39, 205, 0.2);
        padding: 2rem;
        margin-bottom: 3rem;
        text-align: center;
    `;

    const InfoTitle = styled.h2`
        color: var(--primary-200);
        font-size: 1.5rem;
        margin-bottom: 1rem;
    `;

    const InfoText = styled.p`
        color: var(--text-200);
        font-size: 1.1rem;
        line-height: 1.6;
    `;

    return (
        <PageContainer>
            <Container>
                <Header>
                    <Title>Inscrição no Projeto ASAS</Title>
                </Header>
                <InfoCard>
                    <InfoTitle>Como se inscrever no Projeto ASAS?</InfoTitle>
                    <InfoText>
                        É muito simples! Basta preencher o formulário abaixo com
                        seus dados pessoais corretamente. Após o envio, nossa
                        equipe analisará seu cadastro e entraremos em contato
                        através do email ou telefone informado.
                    </InfoText>
                </InfoCard>
                <Form onSubmit={handleSubmit}>
                    <FormSection>
                        <SectionTitle>
                            <FaInfoCircle /> Dados Pessoais
                        </SectionTitle>

                        <FormGroup>
                            <Label>Nome Completo *</Label>
                            <Input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Digite seu nome completo"
                            />
                            {errors.name && (
                                <ErrorMessage>{errors.name}</ErrorMessage>
                            )}
                        </FormGroup>

                        <FormGroup>
                            <Label>Data de Nascimento *</Label>
                            <Input
                                type="date"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                            />
                            {errors.birthDate && (
                                <ErrorMessage>{errors.birthDate}</ErrorMessage>
                            )}
                        </FormGroup>

                        <FormGroup>
                            <Label>Gênero</Label>
                            <Select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">Selecione...</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outro">Outro</option>
                            </Select>
                        </FormGroup>

                        <FormGroup>
                            <Label>CPF *</Label>
                            <Input
                                type="text"
                                name="cpf"
                                value={formData.cpf}
                                onChange={handleChange}
                                placeholder="000.000.000-00"
                            />
                            {errors.cpf && (
                                <ErrorMessage>{errors.cpf}</ErrorMessage>
                            )}
                        </FormGroup>

                        <FormGroup>
                            <Label>RG</Label>
                            <Input
                                type="text"
                                name="rg"
                                value={formData.rg}
                                onChange={handleChange}
                                placeholder="0000000"
                            />
                        </FormGroup>
                    </FormSection>

                    <FormSection>
                        <SectionTitle>
                            <FaInfoCircle /> Contato
                        </SectionTitle>

                        <FormGroup>
                            <Label>Telefone *</Label>
                            <Input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(00) 00000-0000"
                            />
                            {errors.phone && (
                                <ErrorMessage>{errors.phone}</ErrorMessage>
                            )}
                        </FormGroup>

                        <FormGroup>
                            <Label>WhatsApp</Label>
                            <Input
                                type="tel"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                placeholder="(00) 00000-0000"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>E-mail *</Label>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seu@email.com"
                            />
                            {errors.email && (
                                <ErrorMessage>{errors.email}</ErrorMessage>
                            )}
                        </FormGroup>
                    </FormSection>

                    <FormSection>
                        <SectionTitle>
                            <FaInfoCircle /> Endereço
                        </SectionTitle>

                        <FormGroup>
                            <Label>Endereço Completo</Label>
                            <Input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Rua, número, complemento"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>Cidade</Label>
                            <Input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>Estado</Label>
                            <Input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>CEP</Label>
                            <Input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                placeholder="00000-000"
                            />
                        </FormGroup>
                    </FormSection>

                    <FormSection>
                        <SectionTitle>
                            <FaInfoCircle /> Emergência
                        </SectionTitle>

                        <FormGroup>
                            <Label>Contato de Emergência</Label>
                            <Input
                                type="text"
                                name="emergencyContact"
                                value={formData.emergencyContact}
                                onChange={handleChange}
                                placeholder="Nome do contato"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>Telefone de Emergência</Label>
                            <Input
                                type="tel"
                                name="emergencyPhone"
                                value={formData.emergencyPhone}
                                onChange={handleChange}
                                placeholder="(00) 00000-0000"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>Condições de Saúde</Label>
                            <Input
                                type="text"
                                name="healthIssues"
                                value={formData.healthIssues}
                                onChange={handleChange}
                                placeholder="Alergias, medicações, etc."
                            />
                        </FormGroup>
                    </FormSection>

                    <FormSection>
                        <SectionTitle>
                            <FaCheckCircle /> Termos e Condições
                        </SectionTitle>

                        <CheckboxContainer>
                            <CheckboxInput
                                type="checkbox"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleChange}
                            />
                            <CheckboxLabel>
                                Li e aceito os{' '}
                                <Link to="/termos">Termos de Uso</Link> do
                                Projeto ASAS
                            </CheckboxLabel>
                        </CheckboxContainer>
                        {errors.acceptTerms && (
                            <ErrorMessage>{errors.acceptTerms}</ErrorMessage>
                        )}

                        <CheckboxContainer>
                            <CheckboxInput
                                type="checkbox"
                                name="acceptPrivacyPolicy"
                                checked={formData.acceptPrivacyPolicy}
                                onChange={handleChange}
                            />
                            <CheckboxLabel>
                                Li e aceito a{' '}
                                <Link to="/privacidade">
                                    Política de Privacidade
                                </Link>{' '}
                                do Projeto ASAS
                            </CheckboxLabel>
                        </CheckboxContainer>
                        {errors.acceptPrivacyPolicy && (
                            <ErrorMessage>
                                {errors.acceptPrivacyPolicy}
                            </ErrorMessage>
                        )}
                    </FormSection>

                    <SubmitButton type="submit">Enviar Inscrição</SubmitButton>
                </Form>
            </Container>
        </PageContainer>
    );
}
