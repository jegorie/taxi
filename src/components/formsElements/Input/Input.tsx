import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import styles from './Input.module.sass'

import isMobilePhone from 'validator/es/lib/isMobilePhone'
import isEmpty from 'validator/es/lib/isEmpty'
import isAlpha from 'validator/es/lib/isAlpha'

import { State, ValidValues } from '../../../interfaces'

interface Props {
	value: string
	setValue: Dispatch<SetStateAction<State>>
	name: string
	valid: boolean
	setValid: Dispatch<SetStateAction<ValidValues>>
}

interface ErrorsAndValid {
	[key: string]: boolean
}

interface IValidator {
	(
		value: string,
		name: string,
		setError: Dispatch<SetStateAction<boolean>>,
		setErrorMsg: Dispatch<SetStateAction<IErrorMsg>>,
		setValid: Dispatch<SetStateAction<ValidValues>>
	): void
}

type IErrorMsg = 'empty' | 'alpha' | 'phone'

const validator: IValidator = (
	value,
	name,
	setError,
	setErrorMsg,
	setValid
) => {
	if (isEmpty(value)) {
		setError(true)
		setErrorMsg('empty')
		return
	}

	if (name === 'from' || name === 'to') {
		setError(false)
		setValid(prevState => ({
			...prevState,
			[name]: true
		}))
		return
	}

	if (!isAlpha(value, 'ru-RU') && name !== 'phone') {
		setError(true)
		setErrorMsg('alpha')
		return
	}

	if (!isMobilePhone(value, 'ru-RU') && name === 'phone') {
		setError(true)
		setErrorMsg('phone')
		return
	}

	setError(false)
	setValid(prevState => ({
		...prevState,
		[name]: true
	}))
}

const errorMessages = {
	empty: 'Заполните поле!',
	alpha: 'Только буквы русского алфавита!',
	phone: 'Неверные номер!',
}

const Input = ({
	value,
	setValue,
	name = '',
	valid = false,
	setValid,
}: Props) => {
	const [error, setError] = useState<boolean>(false)
	const [errorMsg, setErrorMsg] = useState<IErrorMsg>('empty')

	const validateChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
		e.persist()
		validator(e.target.value, name, setError, setErrorMsg, setValid)
		setValue(prevState => ({
			...prevState,
			[name]: e.target.value,
		}))
	}

	const validateInputStyles = error
		? styles.warning
		: valid
		? styles.success
		: ''

	const showErrorMsg = error
		? styles.errorMsg_show
		: ''

	return (
		<div className={styles.wrapper}>
			<input
				type='text'
				value={value}
				onChange={validateChangeEvent}
				className={`${styles.input} ${validateInputStyles}`}
				name={name}
			/>
			<span className={`${styles.errorMsg} ${showErrorMsg}`}>
				{errorMessages[errorMsg]}
			</span>
		</div>
	)
}

export default Input
