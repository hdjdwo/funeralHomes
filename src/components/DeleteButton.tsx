import React from 'react';
import { useDeleteCompanyMutation } from '../features/company/companyApi';
import styles from './DeleteButton.module.css';

const DeleteButton: React.FC<{ companyId: string; onDelete: () => void }> = ({ companyId, onDelete }) => {
  const [deleteCompany] = useDeleteCompanyMutation();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this company?')) {
      try {
        await deleteCompany(companyId).unwrap();
        onDelete();
      } catch (error) {
        console.error('Delete failed:', error);
      }
    }
  };

  return (
    <button className={styles.deleteButton} onClick={handleDelete}>
      Delete Company
    </button>
  );
};

export default DeleteButton;