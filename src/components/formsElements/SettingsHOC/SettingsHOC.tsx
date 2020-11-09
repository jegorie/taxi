import React, { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from 'react'
import styles from './SettingsHOC.module.sass'

interface Props {
	title: string
	step: number
	currentStep: number
	setCurrentHeight: Dispatch<SetStateAction<number>>
	children: ReactNode
}

const SettingsHOC = ({ title, step, currentStep, setCurrentHeight, children }: Props) => {
	const rootEl = useRef<HTMLDivElement>(null)

	// calculate height of this el and set to slider
	useEffect(() => {
		if (currentStep === step) {
			const height = rootEl.current?.clientHeight || 0
			setCurrentHeight(height)
		}
	}, [step, currentStep, setCurrentHeight])

	return (
		<div ref={rootEl}>
			<div className={styles.header}>
				<h2 className={styles.title}>{title}</h2>
			</div>
			<div className={styles.wrapper}>
				{children}
			</div>
		</div>
	)
}

export default SettingsHOC
