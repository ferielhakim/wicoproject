import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rapport } from '../rapport';
import { RapportService } from '../services/rapport/rapport.service';

@Component({
  selector: 'app-rapport-list',
  templateUrl: './rapport-list.component.html',
  styleUrls: ['./rapport-list.component.css']
})
export class RapportListComponent implements OnInit {

  rapports : Rapport[] | undefined;
  constructor(private rapportservice: RapportService, private router: Router) {

   }

  ngOnInit(): void {

    this.rapportservice.getAllRapport().subscribe(
      (data:Rapport[])=>this.rapports=data
    )
    console.log(this.rapports);
  }

}
