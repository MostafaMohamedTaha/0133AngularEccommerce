import { Component, OnInit } from '@angular/core';
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
  itemsPerPage: number = 10;
  // professionRecord = [];
  totalItemCount: number=0;
  constructor(private prd: ProductService) {}
  ngOnInit(): void {
    this.prd.get().subscribe(x => this.prdList = x)
    // this.getByPagination()
    this.totalItemCount=this.prdList.length
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
