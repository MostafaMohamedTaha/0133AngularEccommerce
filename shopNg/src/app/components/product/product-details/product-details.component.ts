import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { Location } from '@angular/common'
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currPrdId!: number
  prd!: IProduct 
  showAddToCart:boolean=true
  showRemoveFromCart:boolean=false
  constructor(
    private activateRoute: ActivatedRoute
    , private prdService: ProductService
    , private router: Router
    , private location: Location) { }
  ngOnInit(): void {
    this.currPrdId = Number(this.activateRoute.snapshot.paramMap.get('pid'))
    // this.prd=this.prdService.getById(this.currPrdId)
    // this.prdIdsList = this.prdService.getPrdIds()
    this.prdService.getById(this.currPrdId).subscribe(x => this.prd = x)
    console.log(this.prd )
    // this.activateRoute.paramMap.subscribe(x => this.currPrdId = Number(x.get('pid')))
  }
  goBack() {
    this.location.back()
    // this.prdService.getById(this.currPrdId).subscribe(x => this.prd = x)
  }
  addToCart(newPrd:IProduct){
    this.showAddToCart=false
    this.showRemoveFromCart=true
    this.prdService.add(newPrd)
  }
  removeFromCart(newPrd:IProduct){
    this.showAddToCart=true
    this.showRemoveFromCart=false
    this.prdService.delete(newPrd)
  }
}
