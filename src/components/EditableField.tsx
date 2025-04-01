// src/components/EditableField.tsx
import React from 'react';
import styles from './EditableField.module.css';

interface EditableFieldProps {
  label: string;
  value: string;
  editing: boolean;
  type?: React.HTMLInputTypeAttribute;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value,
  editing,
  type = 'text',
  error,
  onChange
}) => {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {editing ? (
        <div className={styles.inputContainer}>
          <input
            type={type}
            value={value}
            onChange={onChange}
            className={`${styles.input} ${error ? styles.error : ''}`}
            aria-invalid={!!error}
          />
          {error && <span className={styles.errorText}>{error}</span>}
        </div>
      ) : (
        <div className={styles.value}>{value}</div>
      )}
    </div>
  );
};

export default EditableField;