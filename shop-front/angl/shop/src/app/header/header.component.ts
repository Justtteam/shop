import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthecationService} from "../services/authecation.service";
import {audit} from "rxjs/operators";
//
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private auth:AuthecationService) { }



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
