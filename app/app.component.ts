import { Component } from '@angular/core';
import {ProductService} from './products/product.service';
import {EnglishService} from './english/english.service';

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
        <li><a [routerLink]="['/english']">English</a></li>
        <li><a [routerLink]="['/warehouse']" *ngIf="auth.authenticated()">Warehouse</a></li>
        <li class="navbar"><a (click)="auth.login()" *ngIf="!auth.authenticated()">Log In</a></li>
        <li class="navbar"><a (click)="auth.logout()" *ngIf="auth.authenticated()">Log Out</a></li>
        </ul>
        </div>
        </nav>   
        <div class='container'>
        <router-outlet></router-outlet>
        </div>
    `,
    providers: [ProductService,EnglishService]
})
export class AppComponent {
      constructor(private auth: Auth) {}
         pageTitle: string = `Acme Product Managment`
}
 
 
