import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
    public form: FormGroup;
    constructor(private router: Router) {
      this.form = new FormGroup({
          'username': new FormControl('', Validators.required),
          'password': new FormControl('', Validators.required)
      });
    }
    onSubmit() {
        if(this.form.valid) {
            const searchForm = this.form.value;
            console.log(searchForm);
        }
    }
    login() {
        this.router.navigateByUrl("/tabs");
    }
}