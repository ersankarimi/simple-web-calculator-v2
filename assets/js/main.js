import { display } from './display.js'
import { calculatorButtonContainer } from './calculatorButton.js'

const main = document.createElement('main')
main.classList.add(
	'w-full',
	'h-full',
	'p-4',
	'md:w-[40%]',
	'lg:w-[30%]',
	'2xl:w-[25%]',
	'overflow-hidden'
)

main.appendChild(display)
main.appendChild(calculatorButtonContainer)

export { main }
