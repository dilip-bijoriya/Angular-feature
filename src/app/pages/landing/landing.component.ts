import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public innerHeight: any;
  productList: Array<any> = [];
  constructor() {
  }
  ngOnInit(): void {
    this.innerHeight = window.innerHeight - 90;
    this.getProduct();
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize() {
    this.innerHeight = window.innerHeight - 90;
  }

  private getProduct() {
    const product = [
      {
        id: "1",
        image: "assets/img/product1.webp",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        id: "2",
        image: "assets/img/product2.jpg",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        id: "3",
        image: "assets/img/product3.webp",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        id: "4",
        image: "assets/img/product4.webp",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        id: "5",
        image: "assets/img/product5.webp",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      }
    ]
    this.productList = product
  }
}
