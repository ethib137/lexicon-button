import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import templates from './LexiconButton.soy';

import LexiconIcon from 'lexicon-icon'; // jshint ignore:line

/**
 * Implementation of the Lexicon Button.
 *
 * @see {@link http://liferay.github.io/lexicon/content/buttons/|Lexicon Definition}
 */
class LexiconButton extends Component {
}

/**
 * State definition.
 * @ignore
 * @static
 * @type {!Object}
 */
LexiconButton.STATE = {
	/**
	 * Makes the button a block element filling 100% of the available width.
	 * @default false
	 * @instance
	 * @memberof LexiconButton
	 * @type {boolean}
	 */
	block: {
		validator: core.isBoolean,
		value: false
	},

	/**
	 * URI of the button. Setting `href` will make the component render an
	 * anchor instead of a button but still look like one.
	 * @instance
	 * @memberof LexiconButton
	 * @type {string}
	 */
	href: {
		validator: core.isString
	},

	/**
	 * Icon symbol to show in the button. Icon rendering is delegated to {@link
	 * LexiconIcon}.
	 * @instance
	 * @memberof LexiconButton
	 * @type {string}
	 * @see LexiconIcon
	 */
	icon: {
		validator: core.isString
	},

	/**
	 * Label of the button.
	 * @instance
	 * @memberof LexiconButton
	 * @type {string}
	 */
	label: {
		isHtml: true
	},

	/**
	 * Level of the button. Usually matches one of `default`, `primary`, `info`,
	 * `success`, `warning` or `danger`, but not restricted to any of them.
	 * @default 'default'
	 * @instance
	 * @memberof LexiconButton
	 * @type {string}
	 */
	level: {
		validator: core.isString,
		value: 'default'
	},

	/**
	 * URI of the button. Setting `value` will make the component render an
	 * input instead of a button but still look like one.
	 * @instance
	 * @memberof LexiconButton
	 * @type {string}
	 */
	value: {
		validator: core.isString
	}
};

Soy.register(LexiconButton, templates);

export default LexiconButton;
