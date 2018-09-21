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
    dbName = '';
    frontEnd = '';
    backEnd = '';
    constructor(private http: HttpClient) { }

    createDBConfig(dbData): Observable<any> {
        return this.http.post(environment.apiURL + 'db/setDB', dbData).pipe(tap((data) => data));
    }

    createProject(projectData): Observable<any> {
        return this.http.post(environment.apiURL + 'copy/project', projectData).pipe(tap((data) => data));
    }

    setProjectDetails(obj) {
        this.projectName = obj.projectName;
        this.pathName = obj.pathName;
        this.dbName = obj.dbName;
        this.frontEnd = obj.frontEnd;
        this.backEnd = obj.backEnd;
    }

    getProjectDetails() {
        const obj = { projectName: this.projectName, pathName: this.pathName, dbName: this.dbName, frontEnd: this.frontEnd, backEnd: this.backEnd }
        return obj;
    }


}
