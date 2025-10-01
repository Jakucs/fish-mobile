import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { logoApple, logoGoogle } from 'ionicons/icons';
import { Authapi } from '../shared/authapi';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class RegisterComponent implements OnInit {
  errorMessageFromBackend!: any;
  registerForm!: FormGroup;
  showErrorCard: boolean = false;

  constructor(
    private authapi: Authapi,
    private router: Router,
    private builder: FormBuilder
  ) {}

  ngOnInit(){
  this.registerForm = this.builder.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      password_confirmation: ['']
  })

  }

    register(){
    console.log(this.registerForm.value)
    this.authapi.register(this.registerForm.value).subscribe({
      next: (response: any) => {
        if (response.success){
          console.log("Sikerült a regisztráció! " + response.message)
          this.router.navigate([{outlets: {top: ['successfulregister']}}]);
        }else{
          console.log('Nem sikerült a regisztráció', response)
          this.errorMessageFromBackend = response.message;
          }
      },
      error: (error: HttpErrorResponse) => {
        console.log('Regisztrációs hiba:', error);
        this.showErrorCard = true;
        this.errorMessageFromBackend = `<hr>
        <p>Valós email cím feltétel!</p> <hr> 
        <p>Jelszó minimum 8 karakter! Kisbetűt és számot is tartalmazzon!</p> <hr>
        `
      }

      /* JÓ BACKEND ÜZENET
            error: (error: HttpErrorResponse) => {
        console.log('Regisztrációs hiba:', error);
        this.showErrorCard = true;
        this.errorMessageFromBackend = `
        <p>Valós email cím feltétel!</p> <hr> 
        <p>Jelszó minimum 8 karakter! Kisbetűt és számot is tartalmazzon!</p> <hr> 
        ${error.error?.message} </br>  
        `
      }
      */
    })
  }
}
