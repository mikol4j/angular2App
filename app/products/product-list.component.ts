import {Component, OnInit} from '@angular/core'
import {IProduct} from './product';


@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List...";
    imageWidth: number =50;
    imageMargin: number =2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[] ;
]
toggleImage():void{
    this.showImage = !this.showImage;
}
ngOnInit(): void{
    console.log('In OnInit');
}
onRatingClicked(message:string) : void{
    this.pageTitle = 'Product List: ' +  message;
}
}