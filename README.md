# Simple App to take a taxi

## How to run app

`yarn` - load modules
`yarn build` - build project
`yarn start` - run dev server

---

## App.tsx

contains all states that user must fill in

## SliderForm.tsx

Form that will automatically calculate self height
and change current step by `transform: translateX(...)`

## SettingsHOC.tsx

HOC, base form for settings children el
contains header (takes from **title** props) and body (**children** props)

## UserSettings.tsx, CarSettings.tsx, RoadMapSettings.tsx

contains inputs with validation
and button for navigation

## CarType.tsx

Display all car types for CarSettings.tsx

## NavBtn.tsx

button to change current step

## Input.tsx

Input with validation
contains error state
and takes valid values from parent

## Final.tsx
must send all data to server (not done)
and display all filled data