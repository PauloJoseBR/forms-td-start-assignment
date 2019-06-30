import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: true}) signupForm: NgForm;

  title = 'template-driven-assignment';
  submitted = false;
  defaultSubscription = 'Advanced';

  user = {
    username: '',
    email: '',
    subscription : '',
    password: ''
  };
  
  onSubmit() 
  {
    this.submitted = true;

    this.user.username = this.signupForm.value.nome;
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;

    console.log(this.user.username);
    console.log(this.user.email);    
    console.log(this.user.subscription);
    console.log(this.user.password);
  }
}

