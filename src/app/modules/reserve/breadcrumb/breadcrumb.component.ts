import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'me-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']

})
export class BreadcrumbComponent implements OnInit {

    constructor() {
        console.log('breadcrumb is working');
    }

    ngOnInit() {
    }

}