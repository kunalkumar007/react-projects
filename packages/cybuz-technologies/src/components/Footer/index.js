import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<div className={styles.footerContainer}>
			<div className={`${styles.socialLinksContainer}`}>
				<Link to="/" className={`${styles.socialLinks} ${styles.socialLinks1}`}>
					fb
				</Link>
				<Link to="/" className={`${styles.socialLinks} ${styles.socialLinks2} `}>
					Ig
				</Link>
				<Link to="/" className={`${styles.socialLinks} ${styles.socialLinks3}`}>
					Ln
				</Link>
			</div>
			<div className={`${styles.socialLinksContainer} ${styles.copyright}`}>&copy; 2021</div>
		</div>
	);
}
