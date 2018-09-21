import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-rad02-dbdata-setup',
    templateUrl: './rad02-dbdata-setup.component.html',
    styleUrls: [ './rad02-dbdata-setup.component.css' ]
})
export class Rad02DbdataSetupComponent implements OnInit {
    dataBaseForm: any;
    constructor() {
        this.dataBaseForm = new FormGroup({
            host: new FormControl('', [ Validators.required ]),
            name: new FormControl('', [ Validators.required ]),
            port: new FormControl('', [ Validators.required ]),
            username: new FormControl(''),
            password: new FormControl('')
        });
    }

    ngOnInit() {}
}
