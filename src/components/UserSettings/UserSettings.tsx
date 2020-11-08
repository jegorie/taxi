import React, { ChangeEvent, CSSProperties, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import styles from './UserSettings.module.sass'

import { IUser } from '../../App'
import { State, ValidValues } from '../../interfaces'

import Input from '../formsElements/Input/Input'
import NavBtn from '../formsElements/NavBtn/NavBtn'
import Header from '../Header/Header'

interface Props {
	user: State
	setUser: Dispatch<SetStateAction<State>>
	setStep: Dispatch<SetStateAction<number>>
}

const UserSettings = ({ user, setUser, setStep }: Props) => {
	const [validAll, setValidAll] = useState<ValidValues>({
		firstName: false,
		lastName: false,
		phone: false
	})

	const nextStep = (): void => {
		setStep(1)
	}

	const disableNextStep: boolean = !Object.values(validAll).every(bool => bool)



	return (
		<div>
			<Header title='Ваши данные' />
			<div className={`${styles.settings} Settings__main-content`}>
				<label>
					<span className={styles.span}>Ваше имя</span>
					<Input
						name='firstName'
						setValue={setUser}
						value={user.firstName}
						valid={validAll.firstName}
						setValid={setValidAll}
					/>
				</label>
				<label>
					<span className={styles.span}>Ваша фамилия</span>
					<Input
						name='lastName'
						setValue={setUser}
						value={user.lastName}
						valid={validAll.lastName}
						setValid={setValidAll}
					/>
				</label>
				<label>
					<span className={styles.span}>Ваш номер телефона</span>
					<Input
						name='phone'
						setValue={setUser}
						value={user.phone}
						valid={validAll.phone}
						setValid={setValidAll}
					/>
				</label>
				<div className={styles.nav}>
					<NavBtn
						onClick={nextStep}
						disabled={disableNextStep}
						direction='forward'
					/>
				</div>
			</div>
		</div>
	)
}

export default UserSettings
