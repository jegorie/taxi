import React from 'react'
import styles from './Header.module.sass'

interface Props {
	title: string
}

const Header = ({ title }: Props) => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{title}</h2>
		</div>
	)
}

export default Header
