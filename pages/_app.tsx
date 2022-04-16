import type { AppProps } from 'next/app'
import MainProvider from 'provider/MainProvider'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import '../styles/globals.scss'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
