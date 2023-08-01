import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  productUpdateForm!: FormGroup;
  productById: any = [];

  constructor(private _fb: FormBuilder, private _http: HttpClient, private _route: Router) {

  }

  ngOnInit(): void {

    this.getProductById()





    this.productUpdateForm = this._fb.group({
      p_name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      // userId: new FormControl(this.UserId),
    });
  }

  getProductById() {
    // get url
    const url = this._route.url;
    const productId = url.split('/')[3];

    this._http.get('http://localhost:5000/update/' + productId).subscribe(
      (result) => {
        this.productById = result
        console.log(result);

      }
    )
  }

  updateProduct() {
    // product id
    let productIdUrl = this._route.url;
    let id = productIdUrl.split('/')[3]
    const data = this.productUpdateForm.value;
    if (this.productUpdateForm.valid) {
      this._http.put('http://localhost:5000/updateProduct/' + id, data).subscribe(
        (result) => {
          alert("Successfully updated")
          this._route.navigate(['/dashboard'])
        },
        (error)=>{
          console.log(error)
        }
      )
    }else{
      alert('All Fields are required!')
    }
  }

}
