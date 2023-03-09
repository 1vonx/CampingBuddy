import { ActivatedRoute, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isFixed = false;

  constructor(private route: ActivatedRoute, private router: Router) {

    router.events.pipe(filter(val => ((val instanceof NavigationStart)))).
      subscribe((val) => {

        if (val instanceof NavigationStart && ((val as NavigationStart).url === '/filter' || (val as NavigationStart).url === '/home')) {
          this.isFixed = true;

        }
        else {
          this.isFixed = false;
        }
      });
  }
}
