import { main } from './main.js'

const root = document.getElementById('root')
root.classList.add(
	'w-screen',
	'min-h-screen',
	'justify-center',
	'items-center',
	'flex'
)

root.appendChild(main)

const historyIconContainer = document.querySelector('#history-icon-container')
const historyIcon = document.querySelector('#history-icon')
const historyField = document.querySelector('#history')

const handleOpenCloseHistory = (e) => {
	e.stopPropagation()
	const id = e.target.id

	if (
		id !== 'history-icon' &&
		id !== 'history-icon-container' &&
		id !== 'history'
	) {
		return (
			!historyField.classList.contains('hidden') &&
			historyField.classList.toggle('hidden')
		)
	}

	if (id === 'history') {
		return
	}
	return historyField.classList.toggle('hidden')
}

document.body.addEventListener('click', handleOpenCloseHistory)
historyIcon.addEventListener('click', handleOpenCloseHistory)
historyIconContainer.addEventListener('click', handleOpenCloseHistory)
