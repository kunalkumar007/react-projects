import React, { useState, useEffect } from 'react';
import styles from './pie.module.css';
import PieChart from '../../components/pieChart';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { listUsers } from '../../Screens/Homescreen/data';

export default function pieScreen() {
  const [listFetchedUser, setlistFetchedUser] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      // setisLoading(true);
      const users = await listUsers(2);
      setlistFetchedUser(users);
      setisLoading(false);
    };
    fetchUsers();
  }, []);

  if (isLoading)
    return (
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        className="loader"
      />
    );

  return (
    <div className={styles.homeContainer}>
      <Link to="/" className={styles.button}>
        Go to Page 1
      </Link>
      <div className={styles.chart1}>
        <PieChart user={listFetchedUser} />
      </div>
    </div>
  );
}
