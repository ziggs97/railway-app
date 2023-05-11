import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}

  ngOnInit(){

  }

  login(){
    this.router.navigate(['/tabs/tab2']);
  }
  register(){
    this.router.navigate(['register']);
  }

}
