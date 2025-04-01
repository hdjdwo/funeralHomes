import React, { useState, useEffect } from 'react';
import { Company } from './companyTypes';
import { useUpdateCompanyMutation } from './companyApi';
import EditableField from '../../components/EditableField';
import styles from './CompanyInfo.module.css';

interface CompanyInfoProps {
  company: Company;
  onUpdate: () => void;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ company, onUpdate }) => {
  const [localData, setLocalData] = useState(company);
  const [updateCompany] = useUpdateCompanyMutation();

  useEffect(() => {
    setLocalData(company);
  }, [company]);

  const handleSave = async () => {
    try {
      await updateCompany({
        id: company.id,
        ...localData,
        contract: {
          ...localData.contract
        }
      }).unwrap();
      onUpdate();
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Company Details</h3>
      <div className={styles.grid}>
        <EditableField
          label="Full Name"
          value={localData.name}
          onChange={(e) => setLocalData({ ...localData, name: e.target.value })}
        />
        {/* Добавьте остальные поля */}
      </div>
      <button className={styles.saveButton} onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
};

export default CompanyInfo;