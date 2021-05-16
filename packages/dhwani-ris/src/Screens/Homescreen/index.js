import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import Table from './table.component';
import fetchedData from '../../data';
import { listUsers } from './data';
import Loader from 'react-loader-spinner';

export default function HomeScreen() {
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

  const columns = React.useMemo(
    () => [
      {
        Header: 'User Details',
        columns: [
          {
            Header: 'ID',
            accessor: 'id'
          },
          {
            Header: 'First Name',
            accessor: 'first_name'
          },
          {
            Header: 'Last Name',
            accessor: 'last_name'
          },
          {
            Header: 'Email',
            accessor: 'email'
          }
        ]
      }
    ],
    []
  );

  if (isLoading)
    return (
      <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        className="loader"
      />
    );

  console.log('Users>', listFetchedUser);

  return (
    <div className={styles.homeContainer}>
      <Link to="/data" className={styles.button}>
        Go to Page 2
      </Link>
      <div className={styles.tableContainer}>
        <Table columns={columns} data={listFetchedUser} />
      </div>
    </div>
  );
}
