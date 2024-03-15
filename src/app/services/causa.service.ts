import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Causa } from '../models/causa.model';

@Injectable({
  providedIn: 'root'
})
export class CausaService {

  private urlCausa = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  obtenerCausa(id: number): Observable<Causa> {
    return this.http.get<Causa>(`${this.urlCausa}/causa/${id}`);
  }
}
