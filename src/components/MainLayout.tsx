import React from 'react';
import styles from './MainLayout.module.css';
import Sidebar from './Sidebar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;