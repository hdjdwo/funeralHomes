import React, { useState } from 'react';
import CompanyInfo from './CompanyInfo';
import ContactInfo from './ContactInfo';
import PhotoSection from './PhotoSection';
import DeleteButton from '../components/DeleteButton';
import PhotoUploader from '../components/PhotoUploader';
import styles from './CompanyCard.module.css';

const CompanyCard: React.FC<{ 
  company: Company;
  contact: Contact;
  refetch: () => void 
}> = ({ company, contact, refetch }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{company.name}</h2>
        <button onClick={() => setEditMode(!editMode)}>
          {editMode ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {editMode && (
        <CompanyInfo 
          company={company}
          onUpdate={() => {
            refetch();
            setEditMode(false);
          }}
        />
      )}

      <PhotoSection
        companyId={company.id}
        photos={company.photos}
        onDelete={refetch}
      />

      <PhotoUploader 
        companyId={company.id}
        onUpload={refetch}
      />

      <DeleteButton 
        companyId={company.id}
        onDelete={() => window.location.reload()}
      />
    </div>
  );
};

export default CompanyCard;