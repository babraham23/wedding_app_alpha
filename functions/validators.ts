export const IsEmail = (val: any) => {
    // eslint-disable-next-line
    const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (val) {
        if (reg.exec(val)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
};

export const IsNumber = (val: any) => {
    const reg = /^-{0,1}\d+$/i;
    if (reg.exec(val)) {
        return true
    } else {
        return false
    }
}

export const ValidateFoodChoices = (DATA: any) => {
    let valid = true;
	let errors = [];
	console.log('DATA', DATA)
    if (!DATA.starter) {
		valid = false;
		errors.push({
			name: 'starterError',
			error: 'Starter is required.',
		});
    }
    if (!DATA.main) {
		valid = false;
		errors.push({
			name: 'mainError',
			error: 'Main is required.',
		});
    }
    if (!DATA.dessert) {
		valid = false;
		errors.push({
			name: 'dessertError',
			error: 'Dessert is required.',
		});
    }
    return {
		valid,
		errors,
	};
}


export const ValidateTableDetails = (DATA: any) => {
    let valid = true;
	let errors = [];
	console.log('DATA', DATA)
    if (!DATA.TableId) {
		valid = false;
		errors.push({
			name: 'TableIdError',
			error: 'Table Number is required.',
		});
    }
    if (!DATA.Name) {
		valid = false;
		errors.push({
			name: 'NameError',
			error: 'Name is required.',
		});
    }
    if (DATA.Email && !IsEmail(DATA.Email)) {
        valid = false;
        errors.push({
            name: "EmailError",
            error: "Email must be a valid email address."
        })
    }
    if (!DATA.Email) {
		valid = false;
		errors.push({
			name: 'EmailError',
			error: 'Email is required.',
		});
    }
    if (!DATA.Phone) {
		valid = false;
		errors.push({
			name: 'PhoneError',
			error: 'Phone Number is required.',
		});
    }
    if (!DATA.AgreedToPrivacy) {
		valid = false;
		errors.push({
			name: 'AgreedToPrivacyError',
			error: 'Privacy Policy is required.',
		});
    }
    if (!DATA.AgreedToTerms) {
		valid = false;
		errors.push({
			name: 'AgreedToTermsError',
			error: 'Terms Conditions is required.',
		});
    }
    return {
		valid,
		errors,
	};
}