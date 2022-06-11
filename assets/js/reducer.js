let state = {
	input: '',
	output: 0,
	isOperator: false,
	isBlank: true,
	isNumber: false,
	isDot: false,
	numberOfDots: 0,
	isMines: false,
	isPercent: false,
}

const reducer = (action) => {
	const inputField = document.querySelector('#input')
	const outputField = document.querySelector('#answer')

	let { type, payload } = action
	console.log(type, payload)

	switch (type) {
		case 'number':
			if (state.isBlank) {
				state = {
					...state,
					isBlank: !state.isBlank,
				}
			}

			if (payload === '.') {
				if (state.isDot || state.numberOfDots > 0) {
					return state
				}

				const value =
					!state.isOperator && state.isNumber
						? state.input + payload
						: !state.isOperator
						? '0' + payload
						: state.input + '0' + payload

				state = {
					...state,
					input: value,
					isOperator: false,
					isDot: true,
					isNumber: false,
					numberOfDots: state.numberOfDots + 1,
				}

				// set input value
				return (inputField.innerText = state.input)
			}

			state = {
				...state,
				input: state.isMines
					? state.input.trim() + payload
					: state.input + payload,
				isNumber: true,
				isDot: false,
				isOperator: false,
			}

			console.log(state)
			// set input value
			return (inputField.innerText = state.input)

		// * operator
		case 'operator':
			if (!state.isOperator && state.isBlank) {
				state = {
					...state,
					isBlank: false,
					isOperator: true,
					input: `0 ${payload} `,
					isDot: false,
					numberOfDots: 0,
					isMines: false,
				}
				return (inputField.innerText = state.input)
			}

			if (state.isOperator) {
				return state
			}

			state = {
				...state,
				input: !state.isNumber
					? state.input + '0' + ` ${payload} `
					: state.input + ` ${payload} `,
				isOperator: true,
				isNumber: false,
				numberOfDots: 0,
				isMines: false,
			}
			return (inputField.innerText = state.input)

		case 'plus-minus':
		case 'percent':
			if (state.isBlank || !state.isNumber) {
				console.log('sukkses')
				return state
			}

			if (state.isNumber) {
				let inputSplit = state.input
					.split(' ')
					.filter((item) => item !== '')

				inputSplit[inputSplit.length - 1] =
					type === 'plus-minus'
						? Number(inputSplit[inputSplit.length - 1]) * -1
						: !state.isPercent
						? Number(inputSplit[inputSplit.length - 1]) / 100
						: Number(inputSplit[inputSplit.length - 1]) * 100

				state = {
					...state,
					input: inputSplit.reduce((acc, value) => {
						return (acc += `${value} `)
					}, ''),
					isMines:
						type === 'plus-minus' ? !state.isMines : state.isMines,
					isPercent:
						type === 'percent' ? !state.isPercent : state.isPercent,
				}
			}
			return (inputField.innerText = state.input)
		case 'clear':
			state = {
				input: '',
				output: '',
				isOperator: false,
				isBlank: true,
				isNumber: false,
				isDot: false,
				numberOfDots: 0,
				isMines: false,
			}
			return (inputField.innerText = state.input || 0)
		case 'delete':
			const stateSplit = state.input
				.split(' ')
				.filter((item) => item !== '')

			if (state.length) return state

			const deleteElement = stateSplit.pop().slice(0, -1)
			stateSplit.push(deleteElement)

			const newInput = stateSplit
				.filter((value) => value !== '')
				.reduce((acc, value) => {
					if (String(value).includes('.')) {
						console.log('ke dua true')
						state = {
							...state,
							numberOfDots: 1,
							isDot: true,
						}
					}

					if (Boolean(Number(value)) && Number(value) < 0) {
						console.log('ke tiga true')
						state = {
							...state,
							isMines: true,
							isNumber: false,
							isOperator: false,
						}
					}

					if (/[-+*/%]/gi.test(value)) {
						console.log('ke empat true')
						state = {
							...state,
							isOperator: true,
							isNumber: false,
							isDot: false,
							numberOfDots: 0,
						}
					}

					if (/[\d]/.test(Number(value))) {
						console.log('kelima true')
						state = {
							...state,
							isNumber: true,
							isOperator: false,
						}
					}

					console.log(value)
					return (acc += /[-+/*%]/gi.test(value)
						? ` ${value} `
						: `${value}`)
				}, '')

			state = {
				...state,
				input: newInput,
			}

			console.log('STATEEEEEEEEE', state)
			return (inputField.innerText = state.input)
		default:
			const inputValue = state.input || '0'
			const outputValue = String(Function('return ' + inputValue)())
			const dots = String(outputValue).includes('.')
			state = {
				input: outputValue,
				output: outputValue,
				isOperator: false,
				isBlank: false,
				isNumber: true,
				isDot: dots,
				numberOfDots: dots ? 1 : 0,
				isMines: Number(outputValue) < 0,
			}
			console.log(state)
			return (
				(inputField.innerText = state.output),
				(outputField.innerText = state.output)
			)
	}
}

export { state, reducer }
