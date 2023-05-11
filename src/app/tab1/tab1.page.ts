import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  form!: FormGroup;

  constructor(private router: Router, private formBuilder:FormBuilder) {}

  ngOnInit(){
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  login(){
    this.router.navigate(['/tabs/tab2']);
  }
  register(){
    this.router.navigate(['register']);
  }

}
