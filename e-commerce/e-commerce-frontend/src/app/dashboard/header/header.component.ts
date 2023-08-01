import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';

  constructor(private _route: Router) {}
  ngOnInit(): void {
    // this._route.events.subscribe((val: any) => {
    //   console.log(val.url);
    //   if (val.url) {
    //     if (localStorage.getItem('User')) {
    //       console.log('in product area');
    //       this.menuType = 'login';
    //     }
    //     else{
    //         console.log('outside product area');
    //         this.menuType= 'default'
    //       }
    //   }

    // });
  }
  
  logOut(){
    localStorage.clear()
    this._route.navigate(['dashboard/login'])
  }
}
