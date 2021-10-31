export const generateRandomInt = (): number => {
	return Math.floor(Math.random() * 1_000_000_000_000);
};

export const generateOtp = (length = 4) => {
	let otp = '';
	for (let i = 0; i < length; i++) {
		const rnum = Math.floor(Math.random() * 10);
		otp += rnum;
	}
	return otp;
};

export const generatePassword = (length?: number) => {
	const otp1 = generateOtp(3);
	const otp2 = generateOtp(3);
	const password =
		parseFloat(otp1 + '' + new Date().getTime() + '' + Math.random()).toString(36) +
		'' +
		otp2.toString();

	if (length) return password.slice(-length);
	else return password;
};
