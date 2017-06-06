import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  public hideBreadcrumb :boolean = false;

  constructor(private router: Router) {
    
    /**
     * Subscribe to router change
     */
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url.indexOf("/reserve") > -1 || event.url.indexOf("/step") > -1) {
          this.hideBreadcrumb = false;
        } else {
          this.hideBreadcrumb = true;
        }
      }
      // event instanceof NavigationEnd
    });
  }
  
  ngOnInit() {
    this.hideBreadcrumb = true;
  }

}
