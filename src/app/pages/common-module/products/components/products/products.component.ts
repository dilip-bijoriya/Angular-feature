import { Component, HostListener, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public innerHeight: any;
  constructor(private productService: ProductService) { }
  productList = [
    {
      id: "1",
      image: "assets/img/product1.webp"
    },
    {
      id: "2",
      image: "assets/img/product2.jpg"
    },
    {
      id: "3",
      image: "assets/img/product3.webp"
    },
    {
      id: "4",
      image: "assets/img/product4.webp"
    },
    {
      id: "5",
      image: "assets/img/product5.webp"
    },
    {
      id: "6",
      image: "assets/img/product4.webp"
    },
    {
      id: "7",
      image: "assets/img/product2.jpg"
    },
    {
      id: "1",
      image: "assets/img/product1.webp"
    },
  ]
  ngOnInit(): void {
    this.innerHeight = window.innerHeight - 90;
    this.getProductList();
  }
  @HostListener('window:resize', ['$event'])

  onWindowResize() {
    this.innerHeight = window.innerHeight - 90;
  }
  private getProductList() {
    this.productService.getProducts().pipe().subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
