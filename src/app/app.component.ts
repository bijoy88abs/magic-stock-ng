import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stockApp';
  isValidate = false;
  passwordValue: any;

  validateLogin() {
    if (this.passwordValue === 'champlove25/08') {
      this.isValidate = true;
    } else {
      this.isValidate = false;
    }
  }

}
