import React, { Dispatch, SetStateAction } from 'react'
import styles from './CarType.module.sass'

import { ISelectedCarType } from '../../../App'
import { ICarType } from '../../../App'
import { ICar } from '../../../App'

const ECO_PATH = require('../../../assets/img/econom.png')
const COMFORT_PATH = require('../../../assets/img/comfort.png')
const BUISNESS_PATH = require('../../../assets/img/buisness.png')

interface Props {
	carType: ICarType
	selectedCarType: ISelectedCarType
	setCar: Dispatch<SetStateAction<ICar>>
}

const CarType = ({ carType, selectedCarType, setCar }: Props) => {
	// choose title and img by selectedCarType
	const chooseCarType = {
		eco: {
			path: ECO_PATH,
			title: 'Эконом',
		},
		comfort: {
			path: COMFORT_PATH,
			title: 'Комфорт',
		},
		buisness: {
			path: BUISNESS_PATH,
			title: 'Бизнес',
		},
	}

	// change styles of selected car
	const chooseActiveCarStyles = () =>
		carType === selectedCarType ? styles.wrapper_active : ''

	// set active carType or discard all
	const chooseCarHandler = () => {
		if (selectedCarType === carType) {
			setCar(prevState => ({
				...prevState,
				selectedCarType: 'nothing',
			}))
		} else {
			setCar(prevState => ({
				...prevState,
				selectedCarType: carType,
			}))
		}
	}

	return (
		<div
			className={styles.wrapper}
			onClick={chooseCarHandler}
			id={chooseActiveCarStyles()}
		>
			<img src={chooseCarType[carType].path} alt='car type' />
			<span>{chooseCarType[carType].title}</span>
		</div>
	)
}

export default CarType
