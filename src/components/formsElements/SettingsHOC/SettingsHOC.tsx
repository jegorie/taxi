import React, { ReactNode, useEffect, useRef } from 'react'
import styles from './SettingsHOC.module.sass'

interface Props {
	title: string
	children: ReactNode
}

const SettingsHOC = ({ title, children }: Props) => {
	const rootEl = useRef<HTMLDivElement>(null)

	useEffect(() => {
		console.log(rootEl.current?.clientHeight)
	}, [])

	return (
		<div ref={rootEl}>
			<div className={styles.header}>
				<h2 className={styles.title}>{title}</h2>
			</div>
			<div className={`${styles.settings}`}>
				{children}
			</div>
		</div>
	)
}

export default SettingsHOC
