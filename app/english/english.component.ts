import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EnglishService } from './english.service'
import { IEnglish } from './english';

@Component({
    templateUrl: 'app/english/english.html',

})

export class EnglishComponent implements OnInit{
    pageTitle: string  = 'Product Detail';
    english: IEnglish;
    id: number = 0;
    englishArray: IEnglish[];
    errorMessage: string;


    constructor(private _route: ActivatedRoute, private _router : Router, private _englishService: EnglishService) {
       

    }
    ngOnInit() : void {
        this._englishService.getProducts().subscribe(retVal=>this.englishArray = retVal,
            error=>this.errorMessage = <any>error);

    }
    onBack(): void{
        this._router.navigate(['/english']);
    }
    check(element: IEnglish): boolean
    {
        if(element.answer.includes(element.result))
        return true;
        return false;
    }
}