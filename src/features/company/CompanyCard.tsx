import React, { useState } from 'react';
import styled from 'styled-components';
import { Company, Contact } from './companyTypes';
import EditModal from '../modals/EditModal';
import PhotoUploader from '../PhotoUploader';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.colors.textDark};
`;

const Section = styled.div`
  padding: 32px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.colors.textDark};
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  padding: 16px 0;
`;

const InfoLabel = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
`;

const InfoValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
`;

const EditButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const CompanyCard = ({ company, contact }: { company: Company; contact: Contact }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Card>
      <Header>
        <Title>{company.name}</Title>
        <EditButton onClick={() => setIsEditing(true)}>Edit Company</EditButton>
      </Header>

      <Section>
        <SectionTitle>Company Details</SectionTitle>
        <InfoRow>
          <InfoLabel>Legal Name</InfoLabel>
          <InfoValue>{company.name}</InfoValue>
        </InfoRow>
        {/* Все остальные поля */}
      </Section>

      <Section>
        <SectionTitle>Contacts</SectionTitle>
        <InfoRow>
          <InfoLabel>Primary Contact</InfoLabel>
          <InfoValue>{`${contact.firstname} ${contact.lastname}`}</InfoValue>
        </InfoRow>
        {/* Все контактные данные */}
      </Section>

      <Section>
        <SectionTitle>Photos</SectionTitle>
        <PhotoUploader photos={company.photos} />
      </Section>

      {isEditing && <EditModal onClose={() => setIsEditing(false)} />}
    </Card>
  );
};

export default CompanyCard;