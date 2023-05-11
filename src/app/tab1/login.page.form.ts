import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";

export class LoginPageForm{

    private formBuilder : FormBuilder;

    constructor(formBuilder:FormBuilder){
        this.formBuilder = formBuilder;
    }

    createForm():FormGroup{
        return this.formBuilder.group({
            email:['', [Validators.required, Validators.email]],
            password:['',[Validators.required]]
        });
    }
}