import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AppService } from '../app.service';
import { BaseComponent } from '../base/base.component';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-rad02-dbdata-setup',
    templateUrl: './rad02-dbdata-setup.component.html',
    styleUrls: ['./rad02-dbdata-setup.component.css']
})
export class Rad02DbdataSetupComponent extends BaseComponent implements OnInit, OnDestroy {
    dataBaseForm: any;
    constructor(private appService: AppService,
        private router: Router,
        private messageService: MessageService) {
        super();
        this.dataBaseForm = new FormGroup({
            host: new FormControl('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            port: new FormControl('', [Validators.required]),
            username: new FormControl(''),
            password: new FormControl('')
        });
    }

    onSubmit() {
        const dbData = {
            projectName: this.appService.projectName,
            pathName: this.appService.pathName,
            db: this.dataBaseForm.value
        };
        this.appService.createDBConfig(dbData)
            .pipe(takeUntil(this.ngUnSubscribe)).subscribe((data) => {
                this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'DB Details Submited' });
                this.router.navigate(['mainsetup/modelsetup']);
            }, error => {
                this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'DB Details Submit Failed' });
            });
    }

    ngOnInit() { }
}
