import { FormControl, FormArray, FormGroup, FormBuilder } from '@angular/forms';

// wzorzec budowniczego
export class SpecialFormBuilder extends FormBuilder {
    group(options) {
        return new SpecialFormGroup(options);
    }
}

class SpecialFormGroup extends FormGroup {
    constructor(options) {
        super(options);
        console.log('Special group: ', Object.keys(options));
    }
}
