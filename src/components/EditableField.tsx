import React from 'react';
import styles from '../components/EditableField.module.css';

const EditableField = ({ label, value, editing, type = 'text', onChange }) => {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {editing ? (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={styles.input}
        />
      ) : (
        <div className={styles.value}>{value}</div>
      )}
    </div>
  );
};

export default EditableField;