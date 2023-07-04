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
  successMessage: string;
  showHover = false;

  constructor(
    private activatRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.userId = this.activatRoute.snapshot.paramMap.get('id');
    console.log(this.userId);
  }

  ngOnInit(): void {
    this.emailStatus();
  }

  private emailStatus(): void {
    this.apiService.emailStatus(this.userId).pipe().subscribe({
      next: (res: any) => {
        console.log(res.response.message);
        this.successMessage = res.response.message
        this.showCongratulation();
      },
      error: (error) => {
        this.successMessage = error.error?.message || error.message

        console.log(error);
      }
    });
  }

  showCongratulation() {
    this.showHover = true;
    setTimeout(() => {
      this.showHover = false;
    }, 3000);
  }
}
