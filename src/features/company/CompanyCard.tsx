import React, { useState } from 'react';
import styled from 'styled-components';
import { Company, Contact } from './companyTypes';
import EditModal from '../../components/modals/EditModal';
import PhotoUploader from '../../components/PhotoUploader';

const Card = styled.div<{ theme: any }>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const Header = styled.div<{ theme: any }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h1<{ theme: any }>`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.colors.textDark};
`;

const Section = styled.div<{ theme: any }>`
  padding: 32px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const SectionTitle = styled.h2<{ theme: any }>`
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

const InfoLabel = styled.span<{ theme: any }>`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
`;

const EditButton = styled.button<{ theme: any }>`
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
          <span>{company.name}</span>
        </InfoRow>
      </Section>

      <Section>
        <SectionTitle>Contacts</SectionTitle>
        <InfoRow>
          <InfoLabel>Primary Contact</InfoLabel>
          <span>{`${contact.firstname} ${contact.lastname}`}</span>
        </InfoRow>
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