import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginFacade } from './facade/login.facade';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
    public form: FormGroup;
    constructor(private router: Router,
                private facade: LoginFacade,
                private route: ActivatedRoute) {
      this.form = new FormGroup({
          number: new FormControl('', Validators.required)
      });
    }
    login() {
        if(this.form.valid) {
            const searchForm = this.form.value;
            console.log(searchForm);
        }
    }
}