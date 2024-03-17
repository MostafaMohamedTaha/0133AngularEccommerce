import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([])
  constructor(private http: HttpClient) { }
  get(): Observable<IProduct[]> {
    console.log(`${environment.apiLink}/products`)
    return this.http.get<IProduct[]>(`${environment.apiLink}/products`)
  }

  getById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.apiLink}/products/${id}`)
  }
  add(newPrd: IProduct) {
    // return this.http.post<IProduct>(`${environment.apiLink}/products`)
    this.cartItemList.push(newPrd)
    this.productList.next(this.cartItemList)
  }
  // edit(Prd:IProduct): Observable<IProduct> {
  //   return this.http.put<IProduct>(`${environment.apiLink}/products`)
  // }
  delete(prd: IProduct) {
    // return this.http.delete<IProduct>(`${environment.apiLink}/products`)
    this.cartItemList.map((a: IProduct, index: IProduct) => {
      if (prd.id === a.id) {
        this.cartItemList.splice(index, 1)
      }
    })
    this.productList.next(this.cartItemList)
  }
  products(): Observable<IProduct[]> {
    return this.productList
  }
  calcPrice(qty:number) {
    let total = 0
    let quantity=qty
    this.cartItemList.map((x: any) => {
      quantity=x.quantity
      total += x.price*quantity
    })
    return total
  }
}
