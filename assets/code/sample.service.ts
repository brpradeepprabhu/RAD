import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap, takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class samplemodelService {
    constructor(private http: HttpClient) {}
    createsamplemodel(samplemodelData): Observable<any> {
        return this.http.post(environment.apiURL + '/samplemodel/create', samplemodelData).pipe(tap((data) => data));
    }
    updatesamplemodel(updatesamplemodel) {
        return this.http.put(environment.apiURL + '/samplemodel/update', updatesamplemodel).pipe(tap((data) => data));
    }
    deletesamplemodel(deleteData) {
        return this.http.delete(environment.apiURL + '/samplemodel/delete', deleteData).pipe(tap((data) => data));
    }
    fetchsamplemodel() {
        return this.http.get(environment.apiURL + '/samplemodel/get').pipe(tap((data) => data));
    }
}
