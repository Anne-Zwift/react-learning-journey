import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <p className={`${styles.copyrightText} ${styles.large}`}>
        &copy; {new Date().getFullYear()} My React App. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;