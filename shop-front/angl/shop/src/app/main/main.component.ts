import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Card} from '../classes/Card';
import {ProductService} from "../services/product.service";
import {Topic} from "../classes/Topic";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  /*cards: Observable<Card[]>;*/
  topics: Observable<Topic[]>;
  cards: Card[] = [];
  /*topics: Topics[]=[];*/
  constructor(private prodService: ProductService) {

  }

  ngOnInit(): void {
    for(let i=0;i<16;i++){
      this.cards[i]=new Card("Product",2000)
    }
    /*this.prodService.findAll().subscribe(
      data => {
        this.cards = data;
      }
    );*/
  }

}
