import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

import {IProduct} from './product';

@Injectable()
export class ProductService
{
    private _productUrl = 'api/products/products.json';
    products: IProduct[];
    constructor(private _http: Http){
    this.getProducts().subscribe(products=>this.products = products);
    }

    getProducts(): Observable<IProduct[]>
    {
        return this._http.get(this._productUrl)
        .map((response: Response)=><IProduct[]>response.json())
        .do(data=>console.log('All: ' + JSON.stringify(data)))
        .catch(this.hadleError);
    }

    private hadleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().errror || 'Server error');
    }

    getProduct(productID: number): IProduct{
        return this.products.find(a=>a.productId == productID);

    }
}