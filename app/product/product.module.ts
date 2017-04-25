import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
    ],
    imports: [
        SharedModule,
        ProductRoutingModule
    ],
    providers: [
        ProductDetailGuard,
        ProductService
    ]
})
export class ProductModule {}