import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  formlogin!: FormGroup;
  submitted = false;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private usersService: UserService, 
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  ngOnInit() {
    this.formlogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  login() {
    this.errorMessage = null;
  
    if (this.formlogin.invalid) {
      return;
    }
  
    const username = this.formlogin.value.username;
    const password = this.formlogin.value.password;
  
    const authHeader = 'Basic ' + btoa(username + ':' + password);
    const headers = new HttpHeaders({ 'Authorization': authHeader });
  
    this.usersService.loginUser(username, password, headers).subscribe(
      (data) => {
        console.log(data);
        this.getUserIdByEmail(username).subscribe((userId) => {
          console.log(userId);
          this.router.navigate(['/user-forms/profile', userId]);
        });
      },
      (error) => {
        console.error('Login error:', error);
        if (error.status === 401) {
          this.errorMessage = 'Credenciales incorrectas. Por favor, verifica tus datos.';
        } else {
          this.errorMessage = 'Hubo un error en el inicio de sesión. Por favor, intenta de nuevo más tarde.';
        }
      }
    );
  }
  getUserIdByEmail(mail: string){
    return this.usersService.getUserIdByEmail(mail);
  }
  }
  
