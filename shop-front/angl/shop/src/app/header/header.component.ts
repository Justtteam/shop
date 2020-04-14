import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthecationService} from "../services/authecation.service";
import {audit} from "rxjs/operators";
import {FindService} from '../services/find.service';
import {Observable} from 'rxjs';
import {Product} from '../classes/Product';
//
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  ask: string;
  products: Observable<Product[]>;
  constructor(private router:Router, private auth:AuthecationService, private findService:FindService) { }
  onStringCange(){}
  find() {
    this.products=new Observable<Product[]>();
    this.findService.ask(this.ask).subscribe(data=>{
     this.products=data;
    })
  }

  ngOnInit(): void {
  }
  logOut(){
    this.auth.logOut();
  }
  redirectReg(){
    this.router.navigate(["registration"])
  }
  redirectLogIn(){
    this.router.navigate(["login"])
  }
}
