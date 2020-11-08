import React, { CSSProperties, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import styles from './SliderForm.module.sass'

interface Props {
	children: (setCurrentHeight: Dispatch<SetStateAction<number>>) => ReactNode
	step: number
}

interface IHeightOfCurrentSlide {
	[key: number]: string
}

const heightOfCurrentSlide: IHeightOfCurrentSlide = {
	0: '413px',
	1: '303px',
	2: '323px',
	3: '390px',
}

const SliderForm = ({ children, step }: Props) => {
	const [currentHeight, setCurrentHeight] = useState(413)

	const changeCurrentSliderStyles: CSSProperties = {
		transform: `translateX(-${step * 500}px)`,
		height: heightOfCurrentSlide[step],
	}

	return (
		<form
			className={styles.slider}
			style={changeCurrentSliderStyles}
		>
			{children(setCurrentHeight)}
		</form>
	)
}

export default SliderForm
