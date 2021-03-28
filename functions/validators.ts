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


export const ValidateRegister = (DATA: any) => {
    let valid = true;
	let errors = [];
	console.log('DATA', DATA)
    if (!DATA.username) {
		valid = false;
		errors.push({
			name: 'usernameError',
			error: 'Please enter your name.',
		});
    }
    if (DATA.email && !IsEmail(DATA.email)) {
        valid = false;
        errors.push({
            name: "emailError",
            error: "Email must be a valid email address."
        })
    }
    if (!DATA.email) {
		valid = false;
		errors.push({
			name: 'emailError',
			error: 'Please enter your email.',
		});
    }
    if (!DATA.password) {
		valid = false;
		errors.push({
			name: 'passwordError',
			error: 'Please enter your password.',
		});
    }
    return {
		valid,
		errors,
	};
}


export const ValidateSignIn = (DATA: any) => {
    let valid = true;
	let errors = [];
	console.log('DATA', DATA)
    if (!DATA.username) {
		valid = false;
		errors.push({
			name: 'usernameError',
			error: 'Please enter your name.',
		});
    }
    if (!DATA.password) {
		valid = false;
		errors.push({
			name: 'passwordError',
			error: 'Please enter your password.',
		});
    }
    return {
		valid,
		errors,
	};
}