import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {BookDetails} from "../models/book-details.model";
import {HttpClient, HttpResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class CommonService{

  constructor() {}

  baseURL: string= 'http://localhost:8080/';

  // getAllBookDetails(): Observable<HttpResponse<BookDetails[]>> {
  //
  //   return this._http.get<HttpResponse<BookDetails[]>>(`${this.baseURL}/bShare/books`)
  // }

}

