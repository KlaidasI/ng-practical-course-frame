import { FormGroup, ValidatorFn, ValidationErrors, Validators } from '@angular/forms';

export const regExps: { [key: string]: RegExp } = {
    containsNumber: /\d+/
};

export class CustomValidators {
    static usernameValidator = [Validators.required, Validators.minLength(4)];
    static passwordValidator = [Validators.required, Validators.minLength(6), Validators.pattern(regExps.containsNumber)];

    static passwordsNotMatchValidator: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
        const pass = group.controls.password.value;
        const confirmPassword = group.controls.confirmPassword.value;

        return pass === confirmPassword ? null : { passwordsNotMatch: true };
    }
}

export const errorMessages: { [key: string]: string } = {
    usernameRequired: 'Username is required.',
    usernameMinLength: 'Username must be at least 4 characters long.',
    passwordRequired: 'Password is required.',
    passwordMinLength: 'Password must be at least 6 characters long.',
    passwordContainNumber: 'Password must contain a number.',
    passwordsMustMatch: 'Passwords must match.',
};
