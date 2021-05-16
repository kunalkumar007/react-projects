import React from 'react';
import styles from './dashboardScreen.module.css';
import VerticalBar from '../../components/Chart/verticalBar';
import LineChart from '../../components/Chart/lineChart';
import { NavLink } from 'react-router-dom';
import Table from '../../components/Table';

const SalesNumber = () => {
	return (
		<div className={styles.salesNumberContainer}>
			<div className={`${styles.saleNumberComponent}`}>
				<h1 className={styles.heading}>8954</h1>
				<p className={styles.subtitle}>Lifetime total Sales</p>
			</div>
			<div className={`${styles.saleNumberComponent}`}>
				<h1 className={styles.heading}>7841</h1>
				<p className={styles.subtitle}>Income Amounts</p>
			</div>
			<div className={`${styles.saleNumberComponent}`}>
				<h1 className={styles.heading}>6521</h1>
				<p className={styles.subtitle}>Total Users</p>
			</div>
			<div className={`${styles.saleNumberComponent}`}>
				<h1 className={styles.heading}>325</h1>
				<p className={styles.subtitle}>Total Visits</p>
			</div>
		</div>
	);
};
const Header = () => {
	return (
		<div className={`${styles.headerText} ${styles.header}`}>
			<NavLink to="/" className={`${styles.left} ${styles.header}`}>
				Studio
			</NavLink>
		</div>
	);
};

export default function DashBoardScreen() {
	return (
		<div className={styles.container}>
			<Header />
			<SalesNumber />
			<div className={styles.chartContainer}>
				<div className={styles.chart1}>
					<VerticalBar />
				</div>
				<div className={styles.chart1}>
					<LineChart />
				</div>
			</div>
			<div className={styles.tableContainer}>
				<Table />
			</div>
		</div>
	);
}
