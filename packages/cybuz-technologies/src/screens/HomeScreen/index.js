import React from 'react';
import Header from '../../components/Header';
import styles from './homescreen.module.css';
import Footer from '../../components/Footer';

export default function HomeScreen() {
	return (
		<div className={styles.container}>
			<Header />
			<div className={`${styles.banner} ${styles.bannerText}`}>CyBuzz</div>
			<Footer />
		</div>
	);
}
