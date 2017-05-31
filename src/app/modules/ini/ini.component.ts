import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'ini-module',
  templateUrl: './ini.component.html'

})
export class IniComponent implements OnInit {

    constructor(
        private afdb : AngularFireDatabase
    ) {
        console.log(afdb.list('/items'));
    }

    ngOnInit() {
    }

}
