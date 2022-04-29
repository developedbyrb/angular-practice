import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home';
  activeUser: boolean = false;

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token !== null) {
        this.activeUser = true;
    } else {
        this.activeUser = false;
    }
  }
}
