import { Component } from '@angular/core';
import { GoalsComponent } from '../goal/goals.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showOther: boolean = false;

  continue() {

    this.showOther = !this.showOther;
  }
}
