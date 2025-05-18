import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonInput, IonText } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: true,
  imports: [IonText, IonInput, IonButton, IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ReactiveFormsModule]
})
export class LoginPagePage implements OnInit {
LoginForm:any;
  constructor(private fb:FormBuilder,private router:Router) { 
     this.LoginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
    // mobile:['',Validators.required],

    })
    if(localStorage.getItem('username')!=null && localStorage.getItem('password')!=null){
     this.router.navigate(['/home'])
    }
    else{
      //  this.loginisactive=false;
      
       this.router.navigate(['/login-page'])
    }
  }

  ngOnInit() {
  }
    submittied=false
    loginshow=false
onSubmit(LoginForm:any){
  // if(LoginForm.valid){
  console.log(LoginForm.value)
  if(LoginForm.value.username=='user' && LoginForm.value.password=='pass123' ){
  
  localStorage.setItem("username", "user");
  localStorage.setItem("password", "pass123");
  this.LoginForm.reset();

  this.router.navigate(['/home'])

  }
  else{
    // alert("Invalid Credentials")
    this.loginshow=true;
  }

  // }
  // else{
  //   this.submittied=true;
  // }
}
get loginFormControl() {
    return this.LoginForm.controls;
  }
 
}
