/* tslint:disable */
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080';
  }
  getNew(): Observable<any> {
    return this.http.get(`${this.url + '/getNew'}`);
  }
  getRecomends(): Observable<any> {
    return this.http.get(`${this.url + '/getRecomends'}`);
  }
  getProdByCatId(id: number ): Observable<any> {
    return this.http.get(`${this.url + '/getProdByType'}/${id}`);
  }
  findAll():Observable<any>{
    return this.http.get(`${this.url + '/getAll'}`)
  }
  //not added at back
  getProductsByName(name: string):Observable<any>{
    return this.http.get(`${this.url + '/getProductByName'}/${name}`)
  }

}
