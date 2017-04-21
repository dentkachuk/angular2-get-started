import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <div>My first Component</div>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = 'Denis Application';
}