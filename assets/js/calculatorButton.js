import { calculatorButtonData } from './calculatorButtonData.js'
import { ButtonComponent } from './button.js'

const calculatorButtonContainer = document.createElement('section')
calculatorButtonContainer.classList.add(
	'flex',
	'flex-col',
	'justify-center',
	'items-center'
)

calculatorButtonData.map((buttonItems) => {
	const { items } = buttonItems
	const buttonRow = document.createElement('div')
	buttonRow.classList.add('flex', 'justify-evenly', 'w-full', 'my-2')

	// iterate items array and create the button
	items.map((item) => {
		buttonRow.appendChild(ButtonComponent(item))
	})
	calculatorButtonContainer.appendChild(buttonRow)
})

export { calculatorButtonContainer }
