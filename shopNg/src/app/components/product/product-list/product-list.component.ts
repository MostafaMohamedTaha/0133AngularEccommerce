import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  prdList!: IProduct[]
  pageNumber: number = 1;
  totalItemCount: number=0;
  itemsPerPage: number = 8;
  showToaster:boolean=false
  constructor(private prd: ProductService,private route:Router) {}
  ngOnInit(): void {
    this.prd.get().subscribe(x => this.prdList = x)
    this.totalItemCount=this.prdList.length
  }
  addToCart(newPrd:IProduct){
    this.prd.add(newPrd)
    this.toaster()
  }
  toaster(){
    this.showToaster=true
    setTimeout(() => {
      this.showToaster = false;
      // this.route.navigateByUrl('/prd/')
    }, 3000);
  }
  removeFromCart(prd:IProduct){
    this.prd.delete(prd)
  }
  //#region comment

    // public product = {
    //   ProductID: 1,
    //   ProductName: "Desk",
    //   UnitPrice: 265.99,
    //   UnitsInStock: 2,
    //   AverageRating: 6,
    //   TotalReviews: 6,
    //   UserRating: 0,
    //   ImageURL: 'https://picsum.photos/2000/1100',
    //   OrderDate: new Date(),
    //   icons: ['favorite', 'share']
    // };

    // public get productRating(): string {
    //   const rating = this.product.AverageRating +
    //     ((this.product.UserRating || this.product.AverageRating) - this.product.AverageRating) /
    //     (this.product.TotalReviews + 1);
    //   return rating.toFixed(1);
    // }
    // getByPagination(){
    //   this.prd.get().subscribe((data:any) => {
    //   this.prdList=data.data;
    //   this.allProducts = +data.count;
    //   console.log(data.count)
    //   });
    // }
    // renderPage(event:number) {
    //   this.pageNumber=event
    //   this.getByPagination();
    // }
  //#endregion
}
