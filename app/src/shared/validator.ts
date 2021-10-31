import Validator from 'validator';

export default {
	cardNumber: (value: string): boolean =>
		Validator.isCreditCard(value) || value.length >= 12,
	isEmail: (value: string): boolean => {
		// eslint-disable-next-line prettier/prettier
		return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value);
	},
	cvc: (value: string): boolean => value.length === 3,
	exp_year: (value: number): boolean => value > 20 && value < 100,
	exp_month: (value: number): boolean => value > 0 && value < 13,
	text: (value: string): boolean => Validator.isEmpty(value),
	is_equal: (value: string, comparator: string): boolean =>
		Validator.equals(value, comparator),
	isPhoneNumber: (value: string): boolean => {
		let final = value.replace(/\s/g, '');
		if (final.length === 11) final = final.substr(1, 10);
		return Validator.isMobilePhone(final, 'any', { strictMode: true });
	},
	account_number: (value: string): boolean => Validator.isNumeric(value),
};
