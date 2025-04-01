
import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>⚠️</div>
      <div className={styles.text}>{message}</div>
      <button 
        className={styles.button}
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;