import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  productShow:IProduct[]=[]
  totalPrice:number=0
  constructor(private prd:ProductService){}
  ngOnInit(): void {
    this.prd.products().subscribe(x=>this.productShow=x)
    this.totalPrice=this.prd.calcPrice()
  }
  remove(newItem:IProduct){
    this.prd.delete(newItem)
  }

}
