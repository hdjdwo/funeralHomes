import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      {/* Логотип */}
      <div className={styles.logo}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 0L0 8V24L16 32L32 24V8L16 0Z" fill="#2D81E0"/>
          <path d="M16 10L22 14V22L16 26L10 22V14L16 10Z" fill="white"/>
        </svg>
        <span>AFS Admin</span>
      </div>

      {/* Полное меню */}
      <div className={styles.menu}>
        <div className={`${styles.menuItem} ${styles.active}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 21H21V19H3V21ZM3 17H21V15H3V17ZM3 13H21V11H3V13ZM3 7H21V5H3V7ZM3 1V3H21V1H3Z" fill="currentColor"/>
          </svg>
          Companies
        </div>
        
        <div className={styles.menuItem}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z" fill="currentColor"/>
          </svg>
          Contacts
        </div>

        <div className={styles.menuItem}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19.14 12.94C19.49 12.34 19.69 11.68 19.69 11C19.69 9.16 18.15 7.62 16.31 7.62H14.77L15.81 4.33C15.89 4.11 15.78 3.87 15.56 3.79L14.28 3.33C14.06 3.25 13.82 3.36 13.74 3.58L12.69 6.87H7.83L8.88 3.58C8.96 3.36 8.85 3.12 8.63 3.04L7.35 2.58C7.13 2.5 6.89 2.61 6.81 2.83L5.76 6.12H4.31C2.47 6.12 0.93 7.66 0.93 9.5C0.93 10.18 1.13 10.84 1.48 11.44L4.13 16.72C4.5 17.33 5.17 17.75 5.9 17.75H18.1C18.83 17.75 19.5 17.33 19.87 16.72L21.95 12.94H19.14ZM5.9 15.25L3.31 10.12H5.31C5.5 10.12 5.67 10.23 5.75 10.4L7.19 13.4L8.26 10.29C8.35 10.04 8.59 9.88 8.85 9.88H12.5C12.76 9.88 13.0 10.04 13.09 10.29L14.16 13.4L15.6 10.4C15.68 10.23 15.85 10.12 16.04 10.12H18.04L15.45 15.25H5.9Z" fill="currentColor"/>
          </svg>
          Services
        </div>
      </div>

      {/* Нижняя часть */}
      <div className={styles.footer}>
        <div className={styles.userPanel}>
          <div className={styles.avatar}>JD</div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.userRole}>Administrator</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;