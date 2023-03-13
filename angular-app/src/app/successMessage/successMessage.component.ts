import { Component } from '@angular/core';

@Component({
    selector : 'app-successMessage',
    templateUrl : './successMessage.component.html',
    styleUrls : ['./successMessage.component.css']

})

export class successMessage {

    successMessage1 : string = "This is a success message ";
    status : boolean = false;
    constructor(){
        setTimeout(() => {
            this.status = true;
        }, 5000);
    }
}