import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { TransactionItem } from 'src/components/transaction-item/TransactionItem';


@Injectable({ providedIn: 'root' })
export class TransactionService {

  private transactionsUrl = 'http://localhost:8080/api/transactions';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
    ) { }

  /** GET Transactions from the server */
  getTransactions(): Observable<TransactionItem[]> {
    return this.http.get<TransactionItem[]>(this.transactionsUrl)
      .pipe(
        catchError(this.handleError<TransactionItem[]>('getTransaction', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
