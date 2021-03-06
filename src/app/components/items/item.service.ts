import { IItems } from './item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    private itemsUrl = 'api//items/items.json';

    constructor(private http: HttpClient) {}

    getItems(): Observable<IItems[]> {
        return this.http.get<IItems[]>(this.itemsUrl).pipe(
            tap(),
            catchError(this.handleError)
        );
    }

    getItembyId(id: number): Observable<IItems> {
        return this.getItems().pipe(map(items => items.find(item => item.itemId == id)));
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`; 
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }

        console.log(errorMessage);
        return throwError(errorMessage);
    }
}