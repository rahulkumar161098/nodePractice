import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  loginForm!: FormGroup

  constructor(
    private http: HttpClient,
    private _route: Router,

    ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name :new FormControl('',[Validators.required]),
      email :new FormControl('',[Validators.required]),
      password :new FormControl('',[Validators.required]),
    })
  }

  submit(){
    console.log(this.loginForm.value);
    const  data = this.loginForm.value
    this.http.post('http://localhost:5000/register', data).subscribe((res)=>{
    console.log(res);
    localStorage.setItem('User', JSON.stringify(res))
    this._route.navigate(['/dashboard/login'])
    
    })
  }

}
