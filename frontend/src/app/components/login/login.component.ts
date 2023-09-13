import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form !: FormGroup;
  errorMessage : string =''
 

  constructor(private formBuilder : FormBuilder , 
    private userService : UserServiceService,
    private router : Router){}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email : new FormControl(null, [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$")]),
      password : new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(8)])
    })
  }


  onFormSubmit(){
    if(this.form.valid){
      const user : User ={
        email : this.form.value.email,
        password : this.form.value.password
      }
      this.userService.login(user).subscribe({
        next : (response:any)=>{
          console.log(response[1]);
          this.userService.setToken(response[1])
          this.router.navigateByUrl('/');
        },
        error: (error : HttpErrorResponse)=>{
          this.errorMessage = error.error; 
        }
      })
    }
    setTimeout(() => this.errorMessage = '',3000);
  } 
}
