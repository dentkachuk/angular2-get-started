import {Component} from '@angular/core';
import {ProductService} from './product/product.service';

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <h1>{{pageTitle}}</h1>
            <hr>
            <product-list></product-list>
        </div>
    `,
    providers: [ ProductService ]
})
export class AppComponent {
    pageTitle: string = 'Denis Application';
}
