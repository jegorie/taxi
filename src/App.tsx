import React, { CSSProperties, useState } from 'react'
import styles from './App.module.sass'
import CarSettings from './components/CarSettings/CarSettings'
import Final from './components/Final/Final'
import SettingsHOC from './components/formsElements/SettingsHOC/SettingsHOC'
import RoadMapSettings from './components/RoadMapSettings/RoadMapSettings'
import SliderForm from './components/SliderForm/SliderForm'
import Steps from './components/Steps/Steps'
import UserSettings from './components/UserSettings/UserSettings'
import { State } from './interfaces'

export type ICarType = 'eco' | 'comfort' | 'buisness'
export type ISelectedCarType = 'eco' | 'comfort' | 'buisness' | 'nothing'

export interface IUser {
	firstName: string
	lastName: string
	phone: string
}

export interface ICar {
	selectedCarType: ISelectedCarType
}

export interface IRoadMap {
	from: string
	to: string
}

const App = () => {
	const [step, setStep] = useState(0)
	const [user, setUser] = useState<State>({
		firstName: '',
		lastName: '',
		phone: '',
	})
	const [car, setCar] = useState<ICar>({
		selectedCarType: 'nothing',
	})
	const [roadMap, setRoadMap] = useState<State>({
		from: '',
		to: '',
	})

	const resetAll = () => {
		setStep(0)
		setUser({
			firstName: '',
			lastName: '',
			phone: '',
		})
		setCar({
			selectedCarType: 'nothing',
		})
		setRoadMap({
			from: '',
			to: '',
		})
	}

	return (
		<div className={styles.App}>
			<h1 className={styles.header}>Такси</h1>
			<div className={styles.settingsWrapper}>
				<SliderForm step={step}>
					{setCurrentHeight => (
						<>
							<SettingsHOC title='Ваши данные'>
								<UserSettings
									user={user}
									setUser={setUser}
									setStep={setStep}
								/>
							</SettingsHOC>
							<CarSettings
								car={car}
								setCar={setCar}
								setStep={setStep}
							/>
							<RoadMapSettings
								roadMap={roadMap}
								setRoadMap={setRoadMap}
								setStep={setStep}
							/>
							<Final
								setStep={setStep}
								user={user}
								car={car}
								roadMap={roadMap}
								resetAll={resetAll}
							/>
						</>
					)}
				</SliderForm>
			</div>
			<Steps step={step} />
		</div>
	)
}

export default App
