import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user-forms/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router,
    private userService: UserService
    ) {}

    ngOnInit() {
    }
    

  isProfilePage(): boolean {
    return this.router.url.startsWith('/user-forms/profile/');
  }

  logout() {
    this.userService.logout().subscribe(
      () => {
        this.userService.setUser(null);
        this.router.navigate(['/properties/home']);
      },
      (error) => {
        console.error('Error durante el logout:', error);
      }
    );
  }
  
  navigateToProfileOrLogin() {
    const user = this.userService.isUserAuthenticated();
    if (user) {
      this.router.navigate(['/user-forms/profile', user.iduser]);
    } else {
      this.router.navigate(['/user-forms/login']);
    }
  }
  
}
