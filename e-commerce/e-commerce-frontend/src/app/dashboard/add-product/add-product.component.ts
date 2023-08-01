import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  UserId: string = '';

  constructor(private _fb: FormBuilder, private _http: HttpClient) {}

  ngOnInit(): void {
    let userid: any = localStorage.getItem('User');
    let id = JSON.parse(userid);
    this.UserId = id._id;

    this.productForm = this._fb.group({
      p_name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      userId: new FormControl(this.UserId),
    });
  }

  // add product method
  addProduct() {
    const data = this.productForm.value;
    if (this.productForm.valid) {
      this._http
        .post('http://localhost:5000/add_product', data)
        .subscribe((result) => {
          console.log(result);
          this.productForm.reset();
        });
    }else{
      alert("Please fill all fields");
    }
  }
}
