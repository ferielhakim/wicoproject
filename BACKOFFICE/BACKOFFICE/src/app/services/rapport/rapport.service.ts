import { Injectable } from '@angular/core';
import { Rapport } from 'src/app/rapport';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RapportService {

  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;

  getAllRapport(){
    return this.http.get<Rapport[]>(this.baseUrl+"/api/Rapport/getAll");
  }
  getdelete(){
    return this.http.delete<Rapport[]>(this.baseUrl+"/api/Rapport//Delete/{id}");
  }
}
