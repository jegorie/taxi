import React, {
	CSSProperties,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react'
import styles from './SliderForm.module.sass'

interface Props {
	children: (setCurrentHeight: Dispatch<SetStateAction<number>>) => ReactNode
	step: number
}

const SliderForm = ({ children, step }: Props) => {
	// calculate current height of chosen child el and set to slider
	const [currentHeight, setCurrentHeight] = useState(413)

	const changeCurrentSliderStyles: CSSProperties = {
		transform: `translateX(-${step * 500}px)`,
		height: currentHeight + 'px',
	} // show only chosen child el

	return (
		<form className={styles.slider} style={changeCurrentSliderStyles}>
			{children(setCurrentHeight)}
		</form>
	)
}

export default SliderForm
