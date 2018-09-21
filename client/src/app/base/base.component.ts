import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: [ './base.component.css' ]
})
export class BaseComponent implements OnInit, OnDestroy {
    ngUnSubscribe: Subject<any> = new Subject<any>();
    constructor() {}

    ngOnInit() {}
    ngOnDestroy() {
        this.ngUnSubscribe.next();
        this.ngUnSubscribe.complete();
    }
}
