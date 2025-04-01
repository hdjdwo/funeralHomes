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
        name: localData.name,
        shortName: localData.shortName,
        businessEntity: localData.businessEntity,
        contract: {
          no: localData.contract.no,
          issue_date: localData.contract.issue_date
        },
        type: localData.type
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
        <EditableField
          label="Short Name"
          value={localData.shortName}
          onChange={(e) => setLocalData({ ...localData, shortName: e.target.value })}
        />
        <EditableField
          label="Business Entity"
          value={localData.businessEntity}
          onChange={(e) => setLocalData({ ...localData, businessEntity: e.target.value })}
        />
        <EditableField
          label="Contract Number"
          value={localData.contract.no}
          onChange={(e) => setLocalData({
            ...localData,
            contract: { ...localData.contract, no: e.target.value }
          })}
        />
        <EditableField
          label="Contract Date"
          type="date"
          value={new Date(localData.contract.issue_date).toISOString().split('T')[0]}
          onChange={(e) => setLocalData({
            ...localData,
            contract: { ...localData.contract, issue_date: e.target.value }
          })}
        />
      </div>
      <button className={styles.saveButton} onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
};

export default CompanyInfo;