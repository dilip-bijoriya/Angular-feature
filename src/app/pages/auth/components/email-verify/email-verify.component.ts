import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.scss']
})
export class EmailVerifyComponent implements OnInit {
  userId: any;
  constructor(
    private activatRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.userId = this.activatRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.emailStatus();
  }

  private emailStatus(): void {
    this.apiService.emailStatus(this.userId).pipe().subscribe({
      next: (res: any) => {
        console.log(res.response.message);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
