import { FC } from 'react'

import FavoriteMoviesList from './FavoriteMovies/FavoriteMoviesList'
import PopularMovies from './PopularMovies'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMoviesList />
		</div>
	)
}

export default MoviesContainer
