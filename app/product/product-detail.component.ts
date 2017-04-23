import { Component } from '@angular/core';

import { IProduct } from './product';

@Component({
    templateUrl: 'app/product/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    product: IProduct;
}