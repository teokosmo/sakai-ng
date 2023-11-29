import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from 'src/app/demo/api/product';
import { CountryService } from 'src/app/demo/service/country.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { ProductService } from 'src/app/demo/service/product.service';
import { CustomerService } from 'src/app/demo/service/customer.service';

interface expandedRows {
    [key: string]: boolean;
}

@Component({
    templateUrl: './inputdemo.component.html',
    providers: [MessageService, ConfirmationService]
})
export class InputDemoComponent implements OnInit {

    productDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    products: Product[] = [];

    product: Product = {};

    selectedProducts: Product[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private countryService: CountryService, private customerService: CustomerService, private productService: ProductService, private messageService: MessageService) { }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);

        this.cols = [
            { field: 'product', header: 'Product' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
    }

}
