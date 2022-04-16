import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { IMovie } from '@/shared/types/movie.types'

import { getGenresListEach } from '@/utils/movie/getGenresList'

import { getGenresUrl, getMoviesUrl } from '@/configs/api.config'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMoviesUrl(movie.slug)}>
				<a>
					<Image
						width={65}
						src={movie.poster}
						height={97}
						alt={movie.title}
						draggable={false}
						priority
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div className={styles.title}>{movie.title}</div>
				<div className={styles.genres}>
					{movie.genres.map((genre, idx) => (
						<Link key={genre._id} href={getGenresUrl(genre.slug)}>
							<a>{getGenresListEach(idx, movie.genres.length, genre.name)}</a>
						</Link>
					))}
				</div>
			</div>
			<div className={styles.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.rating.toFixed(1)}</span>
			</div>
		</div>
	)
}

export default MovieItem
