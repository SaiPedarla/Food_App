import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food.model';

const baseUrl = 'http://localhost:8080/api/Foods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(baseUrl);
  }

  get(id: any): Observable<Food> {
    return this.http.get<Food>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Food[]> {
    return this.http.get<Food[]>(`${baseUrl}?title=${title}`);
  }
}