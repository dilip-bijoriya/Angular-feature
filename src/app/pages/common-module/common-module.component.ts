import { Component, HostListener, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-common-module',
  templateUrl: './common-module.component.html',
  styleUrls: ['./common-module.component.scss']
})
export class CommonModuleComponent implements OnInit {
  cookieValue: any;
  public innerHeight: any;
  productList: Array<any> = [];
  slides = [
    { image: 'assets/img/slide.png' },
    { image: 'assets/img/slide.png' },
    { image: 'assets/img/slide.png' }
  ];
  constructor(private cookieService: CookieService) {
    const data = this.cookieService.get('web_basket');
    if (data) {
      this.cookieValue = JSON.parse(data);
    }
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
