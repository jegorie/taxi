import React, { Dispatch, SetStateAction, useState } from 'react'

import styles from './RoadMap.module.sass'

import NavBtn from '../formsElements/NavBtn/NavBtn'
import Input from '../formsElements/Input/Input'

import { State, ValidValues } from '../../interfaces'

interface Props {
	roadMap: State
	setRoadMap: Dispatch<SetStateAction<State>>
	setStep: Dispatch<SetStateAction<number>>
}

const RoadMapSettings = ({ roadMap, setRoadMap, setStep }: Props) => {
	// validation. Must be all true to continue
	const [validAll, setValidAll] = useState<ValidValues>({
		from: false,
		to: false,
	})

	const prevStep = (): void => setStep(1)
	const nextStep = (): void => setStep(3)

	// disable next step if false
	const disableNextStep: boolean =
		roadMap.from.trim().length === 0 || roadMap.to.trim().length === 0

	return (
		<>
			<label>
				<span className={styles.span}>Пункт отправки</span>
				<Input
					name='from'
					setValue={setRoadMap}
					value={roadMap.from}
					valid={validAll.from}
					setValid={setValidAll}
				/>
			</label>
			<label>
				<span className={styles.span}>Пункт приезда</span>
				<Input
					name='to'
					setValue={setRoadMap}
					value={roadMap.to}
					valid={validAll.to}
					setValid={setValidAll}
				/>
			</label>
			<div className={styles.nav}>
				<NavBtn disabled={false} direction='back' onClick={prevStep} />
				<NavBtn
					disabled={disableNextStep}
					direction='forward'
					onClick={nextStep}
				/>
			</div>
		</>
	)
}

export default RoadMapSettings
