import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

// Services
import { RouterService } from '../../core/router/router.service';

@Component({
    selector: 'signin-module',
    templateUrl: './sign-in.component.html',
    styleUrls: ['sign-in.component.scss']
})

export class SignInComponent implements OnInit {

    user: Observable<firebase.User>;

    constructor( 
        private afAuth  : AngularFireAuth,
        private routerService : RouterService
    ){
        this.user = afAuth.authState; 
    }

    ngOnInit() {
    }

    login() {
        let provider = new firebase.auth.GoogleAuthProvider();
        this.afAuth.auth.signInWithPopup(provider)
            .then(function(result) {
                this.routerService.goToPath('home');
            }).catch(function(error) {
                console.log('some error: ' + error);
            });
    }

}