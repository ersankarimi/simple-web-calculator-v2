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
