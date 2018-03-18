/**
 * Class representing an Accordion HTMLElement
 * @author Dídac García
 * @version 1.0.0
 */
class Accordion {
	/**
	 * Create an Accordion
	 * @param {HTMLElement} e - Definition list element: <dl></dl>
	 */
	constructor(e) {
		this.accordion = e;
		
		/**
		 * Add CSS class to HTMLElement
		 * @param {HTMLElement} element 
		 * @param {string} className 
		 */
		this.addClass = (element, className) => {
			element.classList.add(className);
		};
		
		/**
		 * Add event listener to HTMLElement
		 * @param {HTMLElement} e 
		 * @param {string} type - tipe of event listener
		 * @param {*} handler - callback function
		 */
		this.addEvent = (e, type, handler) => {
			if (e.attachEvent) {
				e.attachEvent('on' + type, handler);
			} else {
				e.addEventListener(type, handler);
			}
		};
		
		/**
		 * Add click event listener to "dt" HTMLElement
		 * @param {HTMLElement} e 
		 */
		this.addEventListenersToDT = (e) => {
			this.addEvent(e, 'click', () => {
				const nextElemSibling = e.nextElementSibling;
				
				if(nextElemSibling.classList.contains('is-expanded')){
					this.toggleClassName(nextElemSibling, 'is-expanded');
				}else{
					this.contractAllDefinitions();
					this.toggleClassName(nextElemSibling, 'is-expanded');
				}
			});	
		};
		
		/**
		 * Toggle CSS class on target HTMLElement
		 * @param {HTMLElement} e 
		 * @param {string} className
		 */
		this.toggleClassName = (e, className) => {
			e.classList.toggle(className);
		};
		
		/**
		 * Contract all "dt" HTMLElements
		 */
		this.contractAllDefinitions = () => {
			const elements = document.getElementsByClassName('is-expanded');
			Array.prototype.forEach.call(elements, e => {
				e.classList.remove('is-expanded');
			});
		};

		/**
		 * Initilize Accordion
		 */
		this.init = () => {
			this.addClass(this.accordion, 'Accordion');
			
			for (let i = 0; i < this.accordion.children.length; i++) {
				let e = this.accordion.children[i];
				
				if (e.tagName === 'DT') {
					this.addClass(e, 'Accordion-dt');
					this.addEventListenersToDT(e);
				}
				
				if (e.tagName === 'DD') {
					this.addClass(e, 'Accordion-dd');
				}
			}
		};
		this.init();
	}
	
	/**
	 * Create and add to HTML a new "dt" HTMLElement with data provided
	 * @param {string} title - text for "dt" HTMLElement
	 * @param {string} data - data for "p" HTMLElement in "dd" HTMLElement
	 */
	addNewContent(title, data) {
		const dt = document.createElement('dt');
		this.addClass(dt, 'Accordion-dt');
		this.addClass(dt, 'is-animated');
		dt.innerHTML = title;
		this.addEventListenersToDT(dt);

		const dd = document.createElement('dd');
		this.addClass(dd, 'Accordion-dd');
		const p = document.createElement('p');
		p.innerHTML = data;
		dd.appendChild(p);

		this.accordion.appendChild(dt);
		this.accordion.appendChild(dd);

		setTimeout( () => dt.classList.remove('is-animated'), 1000 );
	}
}