import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod, RequestOptions, ResponseContentType } from "@angular/http";
import { Observable } from 'rxjs';
@Injectable()
export class HttpHelper {
    protected headers: Headers;
    constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    Get(url: string): Observable<any> {
        return this._http.get(url)
            .pipe(
                map((res: Response) => res.json())
            );
    }

    Post(url: string, data: any): Observable<any> {
        return this._http.post(url, data).pipe(
            map((res: Response) => res.json())
        );
    }

    postfile(url: string, data: any): Observable<any> {
        console.log(url);
        let headers = new Headers();   
        headers.append('Content-Type', 'multipart/form-data');
        // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // headers.append('Authorization', 'Bearer ' + currentUser.token);
        // let options = new RequestOptions({ headers: headers });  
        return this._http.post( url, data)
        .pipe(
            map((res: Response) => res.json())            
        );
        
    }

}