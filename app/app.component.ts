import { Component } from '@angular/core';
import {ProductService} from './products/product.service';
import { Auth }              from './auth.service';

@Component({
    selector: 'pm-app',
    template:
     `   
        <nav class='navbar navbar-default'>
        <div class='container-fluid'>
        <a class='navbar-brand'> {{pageTitle}}</a>
        <ul class='nav navbar-nav'>
        <li><a [routerLink]="['/welcome']">Home</a></li>
        <li><a [routerLink]="['/products']">Product list</a></li>
        <li><a [routerLink]="['/warehouse']">Warehouse</a></li>
        </ul>
        </div>
          <div class="navbar-header">
  <a class="navbar-brand" href="#">Auth0 - Angular 2</a>
  <button class="btn btn-primary btn-margin" (click)="auth.login()" *ngIf="!auth.authenticated()">Log In</button>
  <button class="btn btn-primary btn-margin" (click)="auth.logout()" *ngIf="auth.authenticated()">Log Out</button>
</div>
        </nav>   
        <div class='container'>
        <router-outlet></router-outlet>
        </div>
    `,
    providers: [ProductService]
})
export class AppComponent {
      constructor(private auth: Auth) {}
         pageTitle: string = `Acme Product Managment`
}
 
 
