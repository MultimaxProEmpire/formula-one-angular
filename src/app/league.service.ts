import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {League} from "./League";

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  private apiServerUrl = '';
  constructor(private http: HttpClient) { }

  public getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(`${this.apiServerUrl}/league`)
  }

  public addLeague(league:League): Observable<League>{
    return this.http.post<League>(`${this.apiServerUrl}/league/add`,league)
  }
  public deleteLeague(leagueId:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/league/delete`)
  }
}
