import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap, takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AppService {
    projectName = 'testApp';
    pathName = '/home/pradeep/';
    constructor(private http: HttpClient) {}
    createDBConfig(dbData): Observable<any> {
       return this.http.post(environment.apiURL + 'db/setDB', dbData).pipe(tap((data) => data));
    }
}
