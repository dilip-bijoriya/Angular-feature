import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.scss']
})
export class EmailVerifyComponent implements OnInit {
  userId: string;
  constructor(private activatRoute: ActivatedRoute) {
    this.userId = this.activatRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    console.log(this.userId);
  }
}
