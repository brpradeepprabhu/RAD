import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { BaseComponent } from '../base/base.component';
import { takeUntil, } from 'rxjs/operators';

@Component({
    selector: 'app-rad02-dbdata-setup',
    templateUrl: './rad02-dbdata-setup.component.html',
    styleUrls: [ './rad02-dbdata-setup.component.css' ]
})
export class Rad02DbdataSetupComponent extends BaseComponent implements OnInit, OnDestroy {
    dataBaseForm: any;
    constructor(private appService: AppService) {
        super();
        this.dataBaseForm = new FormGroup({
            host: new FormControl('', [ Validators.required ]),
            name: new FormControl('', [ Validators.required ]),
            port: new FormControl('', [ Validators.required ]),
            username: new FormControl(''),
            password: new FormControl('')
        });
    }
    dbSubmitClick() {
        const dbData = {
            projectName: this.appService.projectName,
            pathName: this.appService.pathName,
            db: {
                host: 'localhost',
                name: 'testdddbb',
                port: '27017',
                username: '',
                password: ''
            }
        };
        this.appService.createDBConfig(dbData).pipe(takeUntil(this.ngUnSubscribe)).subscribe((data) => {
            console.log(data);
        });
    }

    ngOnInit() {}
}
