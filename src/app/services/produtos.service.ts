import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiFakeStore } from '../api-fake-store';

@Injectable({
  providedIn: 'root',
})
export class FakeStore {
  

  private fakestore: string = 'https://fakestoreapi.com/products/';
  constructor(private http: HttpClient) { }

  getFakeStore(): Observable<ApiFakeStore[]> {
    const dados = this.http.get<ApiFakeStore[]>(this.fakestore);
    return dados; 
  }

}


