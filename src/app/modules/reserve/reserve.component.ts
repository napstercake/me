import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reserve-module',
  templateUrl: './reserve.component.html'

})
export class ReserveComponent implements OnInit {

    constructor() {
        console.log('reserve is working');
    }

    ngOnInit() {
    }

}
