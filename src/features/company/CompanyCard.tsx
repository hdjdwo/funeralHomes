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
  const [updateCounter, setUpdateCounter] = useState(0);

  const handleUpdate = () => {
    setUpdateCounter(prev => prev + 1);
  };

  return (
    <div className={styles.card} key={updateCounter}>
      <div className={styles.header}>
        <h1 className={styles.title}>{company.name}</h1>
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