export function passwordValidator(control) {
    if (control && control.value !== null && control.value !== undefined) {
        const value = control.value;
        if (value.length < 4) {
            return {
                invalidPassword: true,
                message: "Wachtwoord moet minimaal 4 tekens lang zijn",
            };
        }
        if (!/\d/.test(value)) {
            return {
                invalidPassword: true,
                message: "Het wachtwoord moet een cijfer bevatten",
            };
        }
        if (!/[a-z]/.test(value)) {
            return {
                invalidPassword: true,
                message: "Het wachtwoord moet kleine letters bevatten",
            };
        }
        if (!/[A-Z]/.test(value)) {
            return {
                invalidPassword: true,
                message: "Het wachtwoord moet hoofdletters bevatten",
            };
        }
    }
    return null;
}
//# sourceMappingURL=password.validator.js.map