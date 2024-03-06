import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  get():Observable<IProduct[]>{
    console.log(`${environment.apiLink}/products`)
    return this.http.get<IProduct[]>(`${environment.apiLink}/products`)
  }

  getById(id:number): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.apiLink}/products/${id}`)
  }
  // add(newPrd:IProduct): Observable<IProduct> {
  //   return this.http.post<IProduct>(`${environment.apiLink}/products`)
  // }
  // edit(Prd:IProduct): Observable<IProduct> {
  //   return this.http.put<IProduct>(`${environment.apiLink}/products`)
  // }
  delete(): Observable<IProduct> {
    return this.http.delete<IProduct>(`${environment.apiLink}/products`)
  }
}
