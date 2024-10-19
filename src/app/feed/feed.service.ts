import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookDetails } from '../models/book-details.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private http: HttpClient) { }

  baseURL: string = 'http://localhost:8080/';

  // Adjusted the return type to Observable<BookDetails[]>
  getAllBookDetails(): Observable<BookDetails[]> {
    return this.http.get<BookDetails[]>(`${this.baseURL}/bShare/books`);
  }
}
