export function passwordValidator(control) {
    if (control && control.value !== null && control.value !== undefined) {
        const value = control.value;
        if (value.length < 4) {
            return {
                invalidPassword: true,
                message: 'Password must be at least 4 characters long',
            };
        }
        if (!/\d/.test(value)) {
            return {
                invalidPassword: true,
                message: 'The password must have a number',
            };
        }
        if (!/[a-z]/.test(value)) {
            return {
                invalidPassword: true,
                message: 'The password must have lowercase characters',
            };
        }
        if (!/[A-Z]/.test(value)) {
            return {
                invalidPassword: true,
                message: 'The password must have upercase characters',
            };
        }
    }
    return null;
}
//# sourceMappingURL=password.validator.js.map