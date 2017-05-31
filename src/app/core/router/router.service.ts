import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouterService {

    constructor(private router: Router) {
        this.router = router;
    }
    
    miVariableTicketGlobal = 'Soy global';

    /**
     * 
     */
    goToPath(url :string) :void {
        this.router.navigate(["/" + url]);
    }

}