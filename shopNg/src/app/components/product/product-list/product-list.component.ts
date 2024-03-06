import { Component } from '@angular/core';
import { from } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  prdList!: IProduct[]
  constructor(
    private prd: ProductService,
    
  ) {}
  ngOnInit(): void {
    this.prd.get().subscribe(x => this.prdList = x)
  }
}
