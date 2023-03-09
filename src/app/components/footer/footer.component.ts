import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  isNotDisplayed = false;

  constructor(private router: Router) {

    router.events.pipe(filter(val => ((val instanceof NavigationStart)))).
      subscribe((val) => {
        if (val instanceof NavigationStart && (val as NavigationStart).url === '/filter') {
          this.isNotDisplayed = true;
        }
        else {
          this.isNotDisplayed = false;
        }
      });
  }
}
