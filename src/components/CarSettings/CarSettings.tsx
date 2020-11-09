import React, {Dispatch, SetStateAction } from 'react'
import styles from './CarSettings.module.sass'

import NavBtn from '../formsElements/NavBtn/NavBtn'
import CarType from './CarType/CarType'

import { ICar } from '../../App'


interface Props {
	car: ICar
	setCar: Dispatch<SetStateAction<ICar>>
	setStep: Dispatch<SetStateAction<number>>
}

const CarSettings = ({ car, setCar, setStep }: Props) => {
	// for nav buttons
	const prevStep = (): void => setStep(0)
	const nextStep = (): void => setStep(2)

	// disable next step if false
	const disableNextStep:boolean = car.selectedCarType === 'nothing'

	return (
			<>
				<div className={styles.carTypes}>
					<CarType
						carType='eco'
						selectedCarType={car.selectedCarType}
						setCar={setCar}
					/>
					<CarType
						carType='comfort'
						selectedCarType={car.selectedCarType}
						setCar={setCar}
					/>
					<CarType
						carType='buisness'
						selectedCarType={car.selectedCarType}
						setCar={setCar}
					/>
				</div>
				<div className={styles.nav}>
					<NavBtn
						disabled={false}
						direction='back'
						onClick={prevStep}
					/>
					<NavBtn
						disabled={disableNextStep}
						direction='forward'
						onClick={nextStep}
					/>
				</div>
			</>
	)
}

export default CarSettings
