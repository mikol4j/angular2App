import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template:
     `
        <div><h1>{{pageTitle}}</h1>
        <pm-products>Product-list nested component loading...</pm-products>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = `Acme Product Managment`
 }
