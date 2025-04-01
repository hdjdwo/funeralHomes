import React from 'react';
import { Company, Contact } from './companyTypes';
import styles from './CompanyCard.module.css';

interface CompanyCardProps {
  company: Company;
  contact: Contact;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company, contact }) => {
  return (
    <div className={styles.card}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>{company.name}</h1>
        <div className={styles.actions}>
          <button className={styles.editButton}>Edit</button>
          <button className={styles.deleteButton}>Delete</button>
        </div>
      </div>

      {/* Company Details Section */}
      <Section title="Company Details">
        <InfoRow label="Legal Name" value={company.name} edit />
        <InfoRow 
          label="Business Entity" 
          value={company.businessEntity} 
          edit 
        />
        <InfoRow 
          label="Contract Number" 
          value={company.contract.no} 
          edit 
        />
      </Section>

      {/* Contacts Section */}
      <Section title="Contacts">
        <InfoRow 
          label="Primary Contact" 
          value={`${contact.firstname} ${contact.lastname}`} 
          edit 
        />
        <InfoRow label="Email" value={contact.email} edit />
        <InfoRow label="Phone" value={contact.phone} edit />
      </Section>

      {/* Photos Section */}
      <Section title="Photos">
        <div className={styles.photosGrid}>
          {company.photos.map((photo, i) => (
            <div key={photo.name} className={styles.photoItem}>
              <img 
                src={photo.thumbpath} 
                alt={`Attachment ${i}`} 
                className={styles.photo}
              />
              <button className={styles.deletePhoto}>×</button>
            </div>
          ))}
          <div className={styles.uploadArea}>
            <span>+ Upload New</span>
          </div>
        </div>
      </Section>
    </div>
  );
};

// Вынесенные компоненты должны быть за пределами основного компонента
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.sectionContent}>{children}</div>
  </div>
);

const InfoRow: React.FC<{ label: string; value: string; edit?: boolean }> = ({ label, value, edit }) => (
  <div className={styles.infoRow}>
    <span className={styles.infoLabel}>{label}</span>
    <div className={styles.infoValue}>
      {value}
      {edit && <button className={styles.editFieldButton}>Edit</button>}
    </div>
  </div>
);

export default CompanyCard;