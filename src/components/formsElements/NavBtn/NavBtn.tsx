import React, { MouseEvent } from 'react'
import styles from './NavBtn.module.sass'

import { ReactComponent as ForwardIcon } from '../../../assets/icons/forward.svg'
import { ReactComponent as BackIcon } from '../../../assets/icons/back.svg'

interface Props {
	onClick: () => void
	disabled: boolean
	direction: "forward" | "back"
}

const NavBtn = ({ onClick, disabled, direction }: Props) => {
	const disableBtn = disabled ? styles.disabled : styles.active
	const iconStyle = disabled ? styles.disabledIcon : styles.activeIcon

	const disableClick = disabled ? () => {} : onClick

	const actionAndpreventDefault = (event: MouseEvent): void => {
		event.preventDefault()
		disableClick()
	}

	const directionIcon = direction === 'forward' ? <ForwardIcon className={iconStyle}/> : <BackIcon className={iconStyle} />

	return (
		<button className={disableBtn} onClick={actionAndpreventDefault}>
			{directionIcon}
		</button>
	)
}

export default NavBtn


