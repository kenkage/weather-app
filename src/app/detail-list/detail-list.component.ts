import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {

  @Input() Data:any;
p: number = 1;
cityid="";
cityname="";
  constructor() { }

  ngOnInit(): void {
  }

}
