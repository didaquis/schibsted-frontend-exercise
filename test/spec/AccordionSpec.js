describe('Testing class Accordion', () => {
	it('Should load the class declaration', () => {
		expect(Accordion).not.toBeUndefined();
	});

	it('Should detect class as function', () => {
		expect(typeof Accordion).toBe('function');
	});

	it('Should be an instance of Accordion class', () => {
		const dl = new Accordion(document.createElement('dl'));
		expect(dl instanceof Accordion).toBeTruthy();
	});

	it('Should have "Accordion" CSS class', () => {
		const dl = document.querySelector('dl');
		new Accordion(dl);
		expect(dl.classList.contains('Accordion')).toBeTruthy();
		expect(dl).toHaveClass('Accordion');
	});

	it('Should have "Accordion-dt" CSS class', () => {
		const dl = document.querySelector('dl');
		new Accordion(dl);
		const dt = document.querySelector('dt');
		expect(dt.classList.contains('Accordion-dt')).toBeTruthy();
		expect(dt).toHaveClass('Accordion-dt');
	});

	it('Should have "Accordion-dd" CSS class', () => {
		const dl = document.querySelector('dl');
		new Accordion(dl);
		const dd = document.querySelector('dd');
		expect(dd.classList.contains('Accordion-dd')).toBeTruthy();
		expect(dd).toHaveClass('Accordion-dd');
	});
});