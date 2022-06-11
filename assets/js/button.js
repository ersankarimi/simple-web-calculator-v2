import { reducer } from './reducer.js'

const ButtonComponent = (item) => {
	const button = document.createElement('button')

	const handleClickButton = (e) => {
		e.stopPropagation()
		const { description, value } = { ...e.target.dataset }
		reducer({ type: description, payload: value })
	}

	button.innerText =
		item === 'subtraction' ? '-' : item === 'pm' ? '+/-' : item

	const buttonBgColor =
		item === 'C'
			? 'bg-coral-red-100'
			: item === '='
			? 'bg-green-light-100'
			: 'bg-black-gray-100'

	const buttonTextColor =
		item === 'C' || item === '='
			? 'text-black-gray-100'
			: /[Del | % | / | * | subtraction | +]/.test(item)
			? 'text-green-light-100'
			: 'text-[#fff]'

	const buttonDescription = /[ / | * | subtraction | +]/.test(item)
		? 'operator'
		: /pm/.test(item)
		? 'plus-minus'
		: item === '%'
		? 'percent'
		: item === '='
		? 'equals'
		: item === 'C'
		? 'clear'
		: item === 'Del'
		? 'delete'
		: 'number'

	button.classList.add(
		'w-[48px]',
		'h-[50px]',
		'rounded-[8px]',
		'flex',
		'justify-center',
		'items-center',
		buttonBgColor,
		buttonTextColor
	)

	button.dataset.value = button.innerText
	button.dataset.description = buttonDescription

	button.addEventListener('click', handleClickButton)

	return button
}

export { ButtonComponent }
