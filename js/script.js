document.addEventListener('DOMContentLoaded', () => {
	const main = document.querySelector('.main');

	
	setTimeout(() => {;
		const mainEl = document.createElement('p');
		mainEl.textContent = "Hello";

		main.replaceChild(mainEl, document.querySelector('p'))
	}, 3000);

	let observer = new MutationObserver(mutations => {
		console.log('hey')
	});

	observer.observe(main, {
		childList: true,
		subtree: true
	})
})