import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup

  constructor(
    private http: HttpClient,
    private _route: Router,
    // private _apiService: ApiService,

    ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email :new FormControl('',[Validators.required]),
      password :new FormControl('',[Validators.required]),
    })
  }

  // login(){
  //   const  data = this.loginForm.value;
  //   this._apiService.postSereviceData('/login', data).subscribe((result)=> {
  //     console.log(result.name);   
  //   })

  // }

  Login(){
    const  data = this.loginForm.value
    this.http.post('http://localhost:5000/login', data).subscribe((result: any)=>{

    if(result.auth){
      localStorage.setItem('token',result.auth )
      alert("Login Successfull")
      this._route.navigate(['dashboard'])
    }else{
      alert("Invalid Credentials!")
    }
    })
  }

}

