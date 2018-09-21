import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap, takeUntil } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) {}
    createDBConfig(dbData) {
        this.http
            .post(environment.apiURL + 'db/setDB', dbData)
            .pipe(tap((data) => console.log(data), (error) => console.log(error)));
    }
}
