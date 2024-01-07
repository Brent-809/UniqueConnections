export function emailValidator(control) {
    if (control && control.value !== null && control.value !== undefined) {
        const regex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/g;
        const email = control.value;
        if (!email.match(regex) && email.length > 0) {
            return { invalidEmail: true };
        }
    }
    return null;
}
//# sourceMappingURL=email.validators.js.map