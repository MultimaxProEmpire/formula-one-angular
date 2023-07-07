import {Component, OnInit} from '@angular/core';
import {League} from "./League";
import {LeagueService} from "./league.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public leagues?: League[];
  constructor(private leagueService: LeagueService) {}

  ngOnInit() {
    this.getLeagues();
  }

  public getLeagues(): void {
    this.leagueService.getLeagues().subscribe(
      (response: League[]) => {
        this.leagues = response;
        console.log(this.leagues);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
