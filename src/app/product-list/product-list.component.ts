import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [ProductComponent,CommonModule,RouterModule]
})
export class ProductListComponent {
    
    products: Product[];
    selectedProduct: Product | null;
    productRepository: ProductRepository;
    
    constructor(){
        this.productRepository = new ProductRepository();
        this.products = this.productRepository.getProducts();
    }

    selectProduct(product: Product){
        this.selectedProduct = product;
    }

    unselectProduct(){
        this.selectedProduct = null;
    }
}
