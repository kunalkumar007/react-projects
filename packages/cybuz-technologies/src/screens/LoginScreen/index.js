import React, { useState } from 'react';
import Header from '../../components/Header';
import styles from './loginScreen.module.css';
import Footer from '../../components/Footer';
// import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginComponent = () => {
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	const history = useHistory();
	const submitHandler = async () => {
		console.log('email:', email);
		console.log('password:', password);
		history.push('/dashboard');
		// try {
		// 	const response = await axios.post('http://api.accounts.cybuzz.co.in/web/v1.1.o/onlogin', {
		// 		email,
		// 		password,
		// 	});
		// 	console.log(response);
		// } catch (error) {
		// 	throw new Error(error);
		// }
	};

	return (
		<div className={styles.LoginComponent}>
			<div className={styles.loginCard}>
				<h1 className={`${styles.cardComponent} ${styles.heading}`}>CyBuzz</h1>
				<input
					type="email"
					className={`${styles.cardComponent} ${styles.input}`}
					placeholder="Enter your Email"
					onChange={(e) => setemail(e.target.value)}
				/>
				<input
					type="password"
					className={`${styles.cardComponent} ${styles.input}`}
					placeholder="Enter Password"
					onChange={(e) => setpassword(e.target.value)}
				/>
				<button className={`${styles.cardComponent} ${styles.button}`} onClick={submitHandler}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default function LoginScreen() {
	return (
		<div className={styles.container}>
			<Header />
			<LoginComponent />
			<Footer />
		</div>
	);
}
