import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit{

  bigChart = {}
table = {};
chart = {};
  dataSource=[];
  constructor(private DashboardService:DashboardService) {}

  
  ngOnInit() {
    this.bigChart = this.DashboardService.bigChart();
  }
}
