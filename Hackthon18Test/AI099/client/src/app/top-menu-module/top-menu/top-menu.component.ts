import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  
  menu:any[]=[
    {id:1,name:'Home'},
    {id:2,name:'About'},
    {id:3,name:'Feedback'},
    {id:4,name:'Help'},
    {id:5,name:'Settings'}
  

  ]
  constructor() { }

  ngOnInit() {
  }

}
