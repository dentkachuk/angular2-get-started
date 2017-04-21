import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <h1>{{pageTitle}}</h1>
            <hr>
            <product-list></product-list>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = 'Denis Application';
}
