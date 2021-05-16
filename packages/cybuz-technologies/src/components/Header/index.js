import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

export default function Header() {
	return (
		<>
			<div className={styles.headerContainer}>
				<div className={`${styles.headerText} ${styles.left} ${styles.pulsateFwd}`}>
					<NavLink to="/" className={`${styles.left}`}>
						Studio
					</NavLink>
				</div>
				<div className={`${styles.headerText} ${styles.mid}`}>Hello there! we are here</div>
				<div className={`${styles.headerText} ${styles.pulsateFwd}`}>
					<NavLink to="/login" className={`${styles.right}`}>
						login
					</NavLink>
				</div>
			</div>
		</>
	);
}
