
import React, { useState } from 'react';
import { useDeleteCompanyMutation } from '../features/company/companyApi';
import styles from './DeleteButton.module.css';
import Modal from './Modal';

const DeleteButton: React.FC<{ companyId: string }> = ({ companyId }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteCompany] = useDeleteCompanyMutation();

  const handleDelete = async () => {
    try {
      await deleteCompany(companyId).unwrap();
      setShowConfirm(false);
    } catch (error) {
      console.error('Failed to delete company:', error);
    }
  };

  return (
    <>
      <button 
        className={styles.deleteButton}
        onClick={() => setShowConfirm(true)}
      >
        Delete Company
      </button>

      <Modal isOpen={showConfirm} onClose={() => setShowConfirm(false)}>
        <div className={styles.modalContent}>
          <h3>Confirm Deletion</h3>
          <p>Are you sure you want to delete this company? This action cannot be undone.</p>
          <div className={styles.modalActions}>
            <button 
              className={styles.cancelButton}
              onClick={() => setShowConfirm(false)}
            >
              Cancel
            </button>
            <button 
              className={styles.confirmDeleteButton}
              onClick={handleDelete}
            >
              Delete Permanently
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteButton;