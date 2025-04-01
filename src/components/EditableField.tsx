import React from 'react';
import styles from './EditableField.module.css';

type Props = {
  label: string;
  value: string;
  editing: boolean;
  type?: string;
  error?: string;
  validate?: (value: string) => string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const EditableField = ({
  label,
  value,
  editing,
  type = 'text',
  error,
  validate,
  onChange
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validate) {
      const error = validate(e.target.value);
      // Можно передать ошибку в родительский компонент
    }
    onChange(e);
  };

  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {editing ? (
        <>
          <input
            type={type}
            value={value}
            onChange={handleChange}
            className={`${styles.input} ${error ? styles.error : ''}`}
          />
          {error && <div className={styles.errorMessage}>{error}</div>}
        </>
      ) : (
        <div className={styles.value}>{value}</div>
      )}
    </div>
  );
};

export default EditableField;