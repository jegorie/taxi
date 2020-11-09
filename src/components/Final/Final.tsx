import React, { Dispatch, SetStateAction } from 'react'

import styles from './Final.module.sass'

import { ICar } from '../../App'
import NavBtn from '../formsElements/NavBtn/NavBtn'
import { State } from '../../interfaces'

interface Props {
	setStep: Dispatch<SetStateAction<number>>
	user: State
	car: ICar
	roadMap: State
	resetAll: () => void
}

const Final = ({ setStep, user, car, roadMap, resetAll }: Props) => {
	// translate to russian to display chosen carType
	const carType:State = {
		eco: 'Эконом',
		comfort: 'Комфорт',
		buisness: 'Бизнес',
		nothing: '',
	}

	const prevStep = ():void => setStep(2)

	return (
			<>
				<div className={styles.final}>
					<table className={styles.table}>
						<tbody>
							<tr>
								<td className={styles.tableHeader}>
									Машина:
								</td>
								<td className={styles.tableContent}>
									{carType[car.selectedCarType]}
								</td>
							</tr>
							<tr>
								<td className={styles.tableHeader}>
									Пассажир:
								</td>
								<td className={styles.tableContent}>
									{user.firstName + ' ' + user.lastName}
								</td>
							</tr>
							<tr>
								<td className={styles.tableHeader}>
									Окуда:
								</td>
								<td className={styles.tableContent}>
									{roadMap.from}
								</td>
							</tr>
							<tr>
								<td className={styles.tableHeader}>
									Куда:
								</td>
								<td className={styles.tableContent}>
									{roadMap.to}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.nav}>
					<NavBtn
						disabled={false}
						direction='back'
						onClick={prevStep}
					/>
					<button className={styles.clearAllBtn} onClick={resetAll}>
						Очистить настройки
					</button>
				</div>
			</>
	)
}

export default Final
