'use strict';

import LexiconButton from '../src/LexiconButton';

let button;

describe('LexiconButton', () => {
	afterEach(() => {
		if (button) {
			button.dispose();
		}
	});

	it('should generate a block button when initialized with the block attribute', () => {
		button = new LexiconButton({
			block: true
		});

		assert.strictEqual(button.element.outerHTML, __html__['test/fixture/testBlockLexiconButton.html']);
	});

	it('should append the provided element class to the button markup', () => {
		button = new LexiconButton({
			elementClasses: 'css-class'
		});

		assert.strictEqual(button.element.outerHTML, __html__['test/fixture/testElementClassesLexiconButton.html']);
	});

	it('should generate the default button markup when no params are provided', () => {
		button = new LexiconButton();

		assert.strictEqual(button.element.outerHTML, __html__['test/fixture/testDefaultLexiconButton.html']);
	});

	it('should render a link if the element contains an href', () => {
		button = new LexiconButton({
			href: '#href'
		});

		assert.strictEqual(button.element.outerHTML, __html__['test/fixture/testHrefLexiconButton.html']);
	});

	it('should render a lexicon icon inside the button using the provided spritemap and symbol', () => {
		button = new LexiconButton({
			icon: 'icon',
			spritemap: 'spritemap'
		});

		assert.strictEqual(button.element.outerHTML, __html__['test/fixture/testIconLexiconButton.html']);
	});

	it('should use the provided label to generate the button markup', () => {
		button = new LexiconButton({
			label: 'label'
		});

		assert.strictEqual(button.element.outerHTML, __html__['test/fixture/testLabelLexiconButton.html']);
	});

	it('should use the provided level to generate the button markup', () => {
		button = new LexiconButton({
			level: 'level'
		});

		assert.strictEqual(button.element.outerHTML, __html__['test/fixture/testLevelLexiconButton.html']);
	});

	it('should use the provided size to generate the button markup', () => {
		button = new LexiconButton({
			size: 'size'
		});

		assert.strictEqual(button.element.outerHTML, __html__['test/fixture/testSizeLexiconButton.html']);
	});

	it('should allow label to be html', () => {
		button = new LexiconButton({
			label: '<span>Label</span>'
		});

		assert.strictEqual(button.element.outerHTML, __html__['test/fixture/testLabelHtmlLexiconButton.html']);
	});
});
