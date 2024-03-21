import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router : Router) {}


  goManagementPage () {
    this.router.navigateByUrl('worker/app').then(
      () => {
        localStorage.setItem('authLogin', 'true');

        window.location.reload();
      }
    );
  }
}
