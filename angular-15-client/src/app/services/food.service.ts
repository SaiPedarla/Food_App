import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food.model';

const baseUrl = 'http://localhost:8080/api/Foods';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    });
  }

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(baseUrl, { headers: this.getHeaders() });
  }

  get(id: any): Observable<Food> {
    return this.http.get<Food>(`${baseUrl}/${id}`, {
      headers: this.getHeaders(),
    });
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data, { headers: this.getHeaders() });
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data, {
      headers: this.getHeaders(),
    });
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, { headers: this.getHeaders() });
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl, { headers: this.getHeaders() });
  }

  findByTitle(title: any): Observable<Food[]> {
    return this.http.get<Food[]>(`${baseUrl}?title=${title}`, {
      headers: this.getHeaders(),
    });
  }
}
