import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import styles from './MainLayout.module.css';

const LayoutContainer = styled.div<{ theme: any }>`
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const MainContent = styled.main`
  padding: 48px;
  
  @media (max-width: 1200px) {
    padding: 24px;
  }
`;



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