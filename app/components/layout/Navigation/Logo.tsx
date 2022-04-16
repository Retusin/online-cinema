import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import LogoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block">
				<Image src={LogoImage} width={270} height={50} alt="online-cinema" />
			</a>
		</Link>
	)
}

export default Logo
