'use strict';

import LexiconButton from '../src/LexiconButton';

let lexiconButton;

describe('LexiconButton', () => {
	afterEach(() => {
		if (lexiconButton) {
			lexiconButton.dispose();
		}
	});

	it('should generate a block button when initialized with the block attribute', () => {
		lexiconButton = new LexiconButton({
			block: true
		});

		assert.strictEqual(lexiconButton.element.outerHTML, __html__['test/fixture/testBlockLexiconButton.html']);
	});

	it('should append the provided element class to the button markup', () => {
		lexiconButton = new LexiconButton({
			elementClasses: 'css-class'
		});

		assert.strictEqual(lexiconButton.element.outerHTML, __html__['test/fixture/testElementClassesLexiconButton.html']);
	});

	it('should generate the default button markup when no params are provided', () => {
		lexiconButton = new LexiconButton();

		assert.strictEqual(lexiconButton.element.outerHTML, __html__['test/fixture/testDefaultLexiconButton.html']);
	});

	it('should render a link if the element contains an href', () => {
		lexiconButton = new LexiconButton({
			href: '#href'
		});

		assert.strictEqual(lexiconButton.element.outerHTML, __html__['test/fixture/testHrefLexiconButton.html']);
	});

	it('should render a lexicon icon inside the button using the provided spritemap and symbol', () => {
		lexiconButton = new LexiconButton({
			icon: 'icon',
			spritemap: 'spritemap'
		});

		assert.strictEqual(lexiconButton.element.outerHTML, __html__['test/fixture/testIconLexiconButton.html']);
	});

	it('should use the provided label to generate the button markup', () => {
		lexiconButton = new LexiconButton({
			label: 'label'
		});

		assert.strictEqual(lexiconButton.element.outerHTML, __html__['test/fixture/testLabelLexiconButton.html']);
	});

	it('should use the provided level to generate the button markup', () => {
		lexiconButton = new LexiconButton({
			level: 'level'
		});

		assert.strictEqual(lexiconButton.element.outerHTML, __html__['test/fixture/testLevelLexiconButton.html']);
	});

	it('should use the provided size to generate the button markup', () => {
		lexiconButton = new LexiconButton({
			size: 'size'
		});

		assert.strictEqual(lexiconButton.element.outerHTML, __html__['test/fixture/testSizeLexiconButton.html']);
	});

	it('should allow label to be html', () => {
		lexiconButton = new LexiconButton({
			label: '<span>Label</span>'
		});

		assert.strictEqual(lexiconButton.element.outerHTML, __html__['test/fixture/testLabelHtmlLexiconButton.html']);
	});
});
