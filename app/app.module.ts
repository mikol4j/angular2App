import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { ProductFilterPipe }  from './products/product-filter.pipe';
import { StarComponent }  from './shared/star.component';
import { ProductDetailComponent }  from './products/product-detail.component';
import { WelcomeComponent }  from './home/welcome.component';
import { ProductDetailGuard }  from './products/product-guard.service';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { Auth }              from './auth.service';
import { WarehouseComponent}         from './warehouse/warehouse.component';

@NgModule({
  imports: [ BrowserModule, FormsModule,HttpModule,
  RouterModule.forRoot([
    {path: 'products', component: ProductListComponent},
    {path: 'product/:id',
     canActivate:[ProductDetailGuard],
     component: ProductDetailComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'warehouse', component: WarehouseComponent},
    {path: '', redirectTo: 'welcome',pathMatch: 'full'},
    {path: '**', redirectTo: 'welcome',pathMatch: 'full'},
  ])],
  declarations: [ AppComponent,ProductListComponent, ProductFilterPipe, StarComponent,
  ProductDetailComponent, WelcomeComponent,WarehouseComponent ],
  providers:[ProductDetailGuard,AUTH_PROVIDERS,Auth],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
