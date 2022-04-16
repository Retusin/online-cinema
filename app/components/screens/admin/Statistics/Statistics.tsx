import { FC } from 'react'

import styles from './Admin.module.scss'

import CounterUsers from './CounterUsers'
import PopularMovies from './PopularMovies'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CounterUsers />
			<PopularMovies />
		</div>
	)
}

export default Statistics
