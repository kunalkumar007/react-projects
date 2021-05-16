import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import styles from './table.module.css';

export default function Table() {
	const columns = useMemo(
		() => [
			{
				// first group - TV Show
				Header: 'TV Show',
				// First group columns
				columns: [
					{
						Header: 'Name',
						accessor: 'show.name',
					},
					{
						Header: 'Type',
						accessor: 'show.type',
					},
				],
			},
			{
				// Second group - Details
				Header: 'Details',
				// Second group columns
				columns: [
					{
						Header: 'Language',
						accessor: 'show.language',
					},
					{
						Header: 'Genre(s)',
						accessor: 'show.genres',
					},
					{
						Header: 'Runtime',
						accessor: 'show.runtime',
					},
					{
						Header: 'Status',
						accessor: 'show.status',
					},
				],
			},
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data,
	});

	return (
		<table {...getTableProps()} className={styles.table}>
			<thead className={styles.thead}>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()} className={styles.tr}>
				{rows.map((row, i) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

const data = [
	{
		score: 17.592657,
		show: {
			id: 44813,
			url: 'http://www.tvmaze.com/shows/44813/the-snow-spider',
			name: 'The Snow Spider',
			type: 'Scripted',
			language: 'English',
			genres: ['Drama', 'Fantasy'],
			status: 'In Development',
			runtime: 30,
			premiered: null,
			officialSite: null,
			schedule: {
				time: '',
				days: [],
			},
		},
	},
	{
		score: 17.592657,
		show: {
			id: 44813,
			url: 'http://www.tvmaze.com/shows/44813/the-snow-spider',
			name: 'The Snow Spider',
			type: 'Scripted',
			language: 'English',
			genres: ['Drama', 'Fantasy'],
			status: 'In Development',
			runtime: 30,
			premiered: null,
			officialSite: null,
			schedule: {
				time: '',
				days: [],
			},
		},
	},
	{
		score: 17.592657,
		show: {
			id: 44813,
			url: 'http://www.tvmaze.com/shows/44813/the-snow-spider',
			name: 'The Snow Spider',
			type: 'Scripted',
			language: 'English',
			genres: ['Drama', 'Fantasy'],
			status: 'In Development',
			runtime: 30,
			premiered: null,
			officialSite: null,
			schedule: {
				time: '',
				days: [],
			},
		},
	},
	{
		score: 17.592657,
		show: {
			id: 44813,
			url: 'http://www.tvmaze.com/shows/44813/the-snow-spider',
			name: 'The Snow Spider',
			type: 'Scripted',
			language: 'English',
			genres: ['Drama', 'Fantasy'],
			status: 'In Development',
			runtime: 30,
			premiered: null,
			officialSite: null,
			schedule: {
				time: '',
				days: [],
			},
		},
	},
	{
		score: 17.592657,
		show: {
			id: 44813,
			url: 'http://www.tvmaze.com/shows/44813/the-snow-spider',
			name: 'The Snow Spider',
			type: 'Scripted',
			language: 'English',
			genres: ['Drama', 'Fantasy'],
			status: 'In Development',
			runtime: 30,
			premiered: null,
			officialSite: null,
			schedule: {
				time: '',
				days: [],
			},
		},
	},
	{
		score: 17.592657,
		show: {
			id: 44813,
			url: 'http://www.tvmaze.com/shows/44813/the-snow-spider',
			name: 'The Snow Spider',
			type: 'Scripted',
			language: 'English',
			genres: ['Drama', 'Fantasy'],
			status: 'In Development',
			runtime: 30,
			premiered: null,
			officialSite: null,
			schedule: {
				time: '',
				days: [],
			},
		},
	},
];
