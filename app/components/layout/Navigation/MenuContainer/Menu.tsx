import { FC } from 'react'

import AuthItem from './Auth/AuthItem'
import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'
import styles from './menu.module.scss'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'General' ? <AuthItem /> : null}
			</ul>
		</div>
	)
}

export default Menu
