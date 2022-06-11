import { state } from './reducer.js'
const display = document.createElement('section')
display.id = 'display'
display.classList.add(
	'md:py-8',
	'py-4',
	'px-4',
	'md:px-8',
	'flex',
	'md:mb-8',
	'mb-2',
	'w-full',
	'border-b-[1px]',
	'border-gray-line',
	'relative'
)

display.innerHTML = `
    <div class="flex items-end mb-2 w-1/6 cursor-pointer absolute bottom-4" style="flex-grow: 1">
        <div id="history-icon-container" class="p-2">
            <svg id="history-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" fill="rgba(255,255,255,1)"/></svg>
        </div>
        
        <div id="history" class="border-2 cursor-auto border-gray-line bg-black-gray-100 min-w-[240px] min-h-[80px] top-10 hidden absolute rounded-[8px] py-2 px-4 z-50">
            
        </div>
    </div>

    <div class="flex flex-col w-1/2" style="flex-grow: 8">
        <div id="input" class="text-right font-inter text-4xl mb-2 md:mb-8 text-white font-normal overflow-x-auto overflow-y-hidden">
            ${state.input || 0}
        </div>
        <div id="answer" class="font-inter text-right text-4xl  text-black-gray-100 font-normal overflow-x-auto overflow-y-hidden">
            ${state.output || 0}
        </div>
    </div>

`

export { display }
