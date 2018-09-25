import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { samplemodelService } from '../service/samplemodel.service';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
    selector: 'app-samplemodel',
    templateUrl: './samplemodel.component.html',
    styleUrls: [ './samplemodel.component.css' ]
})
export class samplemodelComponent implements OnInit {
    samplemodelForm = new FormGroup(
        
            //formcontrol
        
    );
    constructor(private samplemodel: samplemodelService) {}

    ngOnInit() {}
    submitBtnClick() {
        this.samplemodel.createsamplemodel(this.samplemodelForm.value).subscribe(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
