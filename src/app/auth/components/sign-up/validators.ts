import { FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
