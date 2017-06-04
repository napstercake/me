import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'me-step1',
  templateUrl: './step1.component.html'

})
export class Step1Component implements OnInit {

    constructor() {
        console.log('Step1 is working');
    }

    ngOnInit() {
    }

}
