import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'gs-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css']
})
export class DashboardPage implements OnInit{
  constructor( private api: ApiService ) { }

  ngOnInit() {
    this.api.getReadme().subscribe(res => console.log(res));
  }
}
