import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre.service'

import { getGenresUrl } from '@/configs/api.config'

import { IMenuItem } from './../menu.interface'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data.map(
					(genre) =>
						({
							icon: genre.icon,
							link: getGenresUrl(genre.slug),
							title: genre.name,
						} as IMenuItem)
				).slice(0 ,4),
				
		}
	)

	return queryData
}
