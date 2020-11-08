import React from 'react'
import styles from './Steps.module.sass'

interface Props {
	step: number
}

const chooseCurrentStep = (step: number, current: number):string => {
	return step === current ? styles.step_active : styles.step
}

const Steps = ({ step }: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={chooseCurrentStep(step, 0)}></div>
			<div className={chooseCurrentStep(step, 1)}></div>
			<div className={chooseCurrentStep(step, 2)}></div>
			<div className={chooseCurrentStep(step, 3)}></div>
		</div>
	)
}

export default Steps
