import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from './product.service'
import { IProduct } from './product';

@Component({
    templateUrl: 'app/products/product-detail.component.html',

})

export class ProductDetailComponent implements OnInit{
    pageTitle: string  = 'Product Detail';
    product: IProduct;
    id: number = 0;
    products: IProduct[];
    errorMessage: string;

    constructor(private _route: ActivatedRoute, private _router : Router, private _productService: ProductService) {
       

    }
    ngOnInit() : void {
        this.id = +this._route.snapshot.params['id'];
        this.pageTitle += ` : ${this.id}`;
        this.product = this._productService.getProduct(this.id);

    }
    onBack(): void{
        this._router.navigate(['/products']);
    }

}