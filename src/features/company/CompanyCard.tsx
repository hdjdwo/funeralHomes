import React, { useState } from 'react';
import styles from './CompanyCard.module.css';
import { Company, Contact } from './companyTypes';
import CompanyInfo from './CompanyInfo';
import ContactInfo from './ContactInfo';
import PhotoSection from './PhotoSection';
import DeleteButton from '../../components/DeleteButton';

const CompanyCard = ({ company, contact }: { company: Company; contact: Contact }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{company.name}</h2>
        <button 
          className={styles.editButton}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>

      <CompanyInfo company={company} isEditing={isEditing} />
      <ContactInfo contact={contact} isEditing={isEditing} />
      <PhotoSection company={company} />
      
      <DeleteButton companyId={company.id} />
    </div>
  );
};

export default CompanyCard;