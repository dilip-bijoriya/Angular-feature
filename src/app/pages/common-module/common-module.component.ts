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
  constructor(private cookieService: CookieService) {
    this.cookieValue = JSON.parse(this.cookieService.get('web_basket'));
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
        image: "assets/img/apple1.jpeg",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        id: "2",
        image: "assets/img/apple2.jpeg",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        id: "3",
        image: "assets/img/apple3.jpeg",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        id: "4",
        image: "assets/img/apple4.jpg",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        id: "5",
        image: "assets/img/apple5.jpg",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      }
    ]
    this.productList = product
  }
}
