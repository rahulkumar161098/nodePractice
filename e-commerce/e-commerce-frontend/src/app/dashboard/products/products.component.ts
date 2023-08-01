import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: any = [];

  constructor(private _http: HttpClient) {
    this.getProductList();
  }

  ngOnInit(): void {
    this.getProductList();
    // this.onChangeSearch(event)
  }

  getProductList() {
    this._http
      .get('http://localhost:5000/products', {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`
        },
      })
      .subscribe((result) => {
        // console.log(result);
        this.productList = result;
      });
  }

  getDelete(id: any) {
    // confirm("Are you sure!")
    this._http
      .delete('http://localhost:5000/delete/' + id)
      .subscribe((result) => {
        alert('Deleted Successfully');
        this.getProductList();
      });
    console.log(id);
  }

  onChangeSearch(event: any) {
    console.log(event.target.value);
    let key = event.target.value;
    if (key == '') {
      this.getProductList();
    } else {
      this._http
        .get('http://localhost:5000/search/' + key, {
          headers: {
            authorization: `Bearer + JSON.parse(localStorage.getItem('token'))`,
          },
        })
        .subscribe((res) => {
          this.productList = res;
        });
    }
  }
}
