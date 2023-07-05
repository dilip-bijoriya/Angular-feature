import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-common-module',
  templateUrl: './common-module.component.html',
  styleUrls: ['./common-module.component.scss']
})
export class CommonModuleComponent implements OnInit {
  cookieValue: any;
  constructor(private cookieService: CookieService) {
    this.cookieValue = JSON.parse(this.cookieService.get('web_basket'));
    console.log(this.cookieValue);
  }
  ngOnInit(): void {

  }
}
