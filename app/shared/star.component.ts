import {Component, OnChanges} from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/start.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarCompoment implements OnChanges{
rating: number = 4;
starWidth: number;
ngOnChanges() :void
{
    this.starWidth = this.rating * 86/5;
}
}