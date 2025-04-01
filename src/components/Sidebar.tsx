import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>AFS</div>
      <ul className={styles.menu}>
        <li className={styles.menuItemActive}>
          <span className={styles.menuIcon}>🏢</span>
          Companies
        </li>
        <li className={styles.menuItem}>
          <span className={styles.menuIcon}>👥</span>
          Contacts
        </li>
        <li className={styles.menuItem}>
          <span className={styles.menuIcon}>⚙️</span>
          Settings
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;