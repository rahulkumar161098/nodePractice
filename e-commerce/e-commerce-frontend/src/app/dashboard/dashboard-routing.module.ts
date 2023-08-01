import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserAuthGuard } from './auth/user-auth.guard';

const routes: Routes = [
  { path: '',component: IndexComponent,  children:[
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    // { path: '', component: SignupComponent },
    { path: '', component: ProductsComponent , canActivate: [UserAuthGuard]},
    { path: 'add_product', component: AddProductComponent, canActivate: [UserAuthGuard] },
    { path: 'update_product/:id', component: UpdateProductComponent, canActivate: [UserAuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [UserAuthGuard] },
    { path: 'signup', component: SignupComponent }, 
    { path: 'login', component: LoginComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
