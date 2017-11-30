import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

import {IEnglish} from './english';

@Injectable()
export class EnglishService
{
    private _englishUrl = 'api/english/english.json';
    englishList: IEnglish[];
    constructor(private _http: Http){
    this.getProducts().subscribe(retVal=>this.englishList = retVal);
    }

    getProducts(): Observable<IEnglish[]>
    {
        return this._http.get(this._englishUrl)
        .map((response: Response)=><IEnglish[]>response.json())
        .do(data=>console.log('All: ' + JSON.stringify(data)))
        .catch(this.hadleError);
    }

    private hadleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().errror || 'Server error');
    }

    getEnglish(ID: number): IEnglish{
        return this.englishList.find(a=>a.Id == ID);

    }
} 