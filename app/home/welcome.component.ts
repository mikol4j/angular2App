import { Component } from '@angular/core';
import { Auth }              from '../auth.service';
@Component({
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
          constructor(private auth: Auth) {}
    public pageTitle: string = 'Welcome';
}
