/**
 * Self execution function: 
 * Listen for DOMContentLoaded and create an instance of Accordion class for each "dl" HTMLElement on DOM.
 */
(() => {
	document.addEventListener('DOMContentLoaded', () => {
		const accordionElements = document.querySelectorAll('dl');
		accordionElements.forEach((accordion, dl) => {
			dl = new Accordion(accordion);
			/**
			 * Get Data from external source and add a new section in "dl" HTMLElement
			 */
			Promise.resolve()
				.then( () => {
					return fetch('https://randomuser.me/api/');
				}).then(res => {
					return res.json();
				})
				.then(res  => {
					if(res.results[0].name.first !== undefined){
						dl.addNewContent('Bonus section!', res.results[0].name.first);
					}
				})
				.catch(err => console.error(err));
		});
	});
})();