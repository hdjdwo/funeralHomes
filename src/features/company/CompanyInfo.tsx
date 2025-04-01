import React, { useState } from 'react';
import { Company } from './companyTypes';
import { useUpdateCompanyMutation } from './companyApi';
import EditableField from '../../components/EditableField';
import styles from './CompanyInfo.module.css';

const CompanyInfo = ({ company, isEditing }: { company: Company; isEditing: boolean }) => {
  const [updateCompany] = useUpdateCompanyMutation();
  const [localData, setLocalData] = useState(company);

  const handleSave = async () => {
    try {
      await updateCompany({ id: company.id, ...localData }).unwrap();
    } catch (error) {
      console.error('Failed to update company:', error);
    }
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Company Information</h3>
      <div className={styles.grid}>
      <EditableField
        label="Full Name"
        value={localData.name}
        editing={isEditing}
        validate={validateName}
        onChange={(e) => setLocalData({ ...localData, name: e.target.value })}
      />
        <EditableField
          label="Short Name"
          value={localData.shortName}
          editing={isEditing}
          onChange={(e) => setLocalData({ ...localData, shortName: e.target.value })}
        />
        <EditableField
          label="Business Entity"
          value={localData.businessEntity}
          editing={isEditing}
          onChange={(e) => setLocalData({ ...localData, businessEntity: e.target.value })}
        />
        <EditableField
          label="Contract Number"
          value={localData.contract.no}
          editing={isEditing}
          onChange={(e) => setLocalData({
            ...localData,
            contract: { ...localData.contract, no: e.target.value }
          })}
        />
        <EditableField
          label="Contract Date"
          type="date"
          value={new Date(localData.contract.issue_date).toISOString().split('T')[0]}
          editing={isEditing}
          onChange={(e) => setLocalData({
            ...localData,
            contract: { ...localData.contract, issue_date: e.target.value }
          })}
        />
      </div>
      {isEditing && (
        <div className={styles.buttons}>
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
          <button 
            className={styles.cancelButton}
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;