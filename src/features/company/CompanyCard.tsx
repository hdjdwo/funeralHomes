import React, { useState } from 'react';
import { Company, Contact } from './companyTypes';
import CompanyInfo from './CompanyInfo';
import ContactInfo from './ContactInfo';
import PhotoSection from './PhotoSection';
import DeleteButton from '../../components/DeleteButton';
import PhotoUploader from '../../components/PhotoUploader';
import styles from './CompanyCard.module.css';

interface CompanyCardProps {
  company: Company;
  contact: Contact;
  refetch: () => void;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company, contact, refetch }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1 className={styles.title}>{company.name}</h1>
        <div className={styles.actions}>
          <button 
            className={`${styles.button} ${isEditing ? styles.cancelButton : styles.editButton}`}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel Editing' : 'Edit Company'}
          </button>
        </div>
      </div>

      {isEditing && (
        <>
          <CompanyInfo company={company} onUpdate={refetch} />
          <ContactInfo contact={contact} onUpdate={refetch} />
        </>
      )}

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Photos</h3>
        <PhotoSection 
          companyId={company.id} 
          photos={company.photos} 
          onDelete={refetch} 
        />
        <PhotoUploader companyId={company.id} onUpload={refetch} />
      </div>

      <DeleteButton companyId={company.id} onDelete={() => window.location.reload()} />
    </div>
  );
};

export default CompanyCard;