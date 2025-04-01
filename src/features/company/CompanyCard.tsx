// src/features/company/CompanyCard.tsx
import React, { useState } from 'react';
import { Company, Contact } from './companyTypes';
import CompanyInfo from './CompanyInfo';
import ContactInfo from './ContactInfo';
import PhotoSection from './PhotoSection';
import DeleteButton from '../../components/DeleteButton';
import styles from './CompanyCard.module.css';

interface CompanyCardProps {
  company: Company;
  contact: Contact;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company, contact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);

  const handleUpdate = () => {
    setForceUpdate(prev => prev + 1);
  };

  return (
    <div className={styles.card} key={forceUpdate}>
      <div className={styles.header}>
        <h1 className={styles.companyName}>{company.name}</h1>
        <button
          className={`${styles.button} ${isEditing ? styles.cancelButton : styles.editButton}`}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <CompanyInfo 
        company={company} 
        isEditing={isEditing} 
        onUpdate={handleUpdate}
      />
      
      <ContactInfo 
        contact={contact} 
        isEditing={isEditing} 
        onUpdate={handleUpdate}
      />
      
      <PhotoSection
        companyId={company.id}
        photos={company.photos}
        onUpdate={handleUpdate}
      />
      
      <DeleteButton companyId={company.id} />
    </div>
  );
};

export default CompanyCard;