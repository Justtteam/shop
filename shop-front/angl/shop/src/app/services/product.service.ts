/* tslint:disable */
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private usersUrl: string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080';
  }
  getNew(): Observable<any> {
    return this.http.get(`${this.usersUrl + '/getNew'}`);
  }
  getRecomends(): Observable<any> {
    return this.http.get(`${this.usersUrl + '/getRecomends'}`);
  }
  getProdByCatId(id: number ): Observable<any> {
    return this.http.get(`${this.usersUrl + '/getProdByType'}/${id}`);
  }
  findAll():Observable<any>{
    return this.http.get(`${this.usersUrl + '/getAll'}`)
  }

}
