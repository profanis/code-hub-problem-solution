import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BugsService {
  private readonly endpoint = 'https://bug-report-system-server.herokuapp.com/bugs';

  constructor(private http: HttpClient) {

  }

  get() {
    return this.http.get(this.endpoint);
  }

  getWithError() {
    return this.http.get(`${this.endpoint}?sort=title-desc`);
  }
}
