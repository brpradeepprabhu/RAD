import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-rad06-complete',
  templateUrl: './rad06-complete.component.html',
  styleUrls: ['./rad06-complete.component.css']
})
export class Rad06CompleteComponent implements OnInit {


  constructor(private appService: AppService) { 

  }

  ngOnInit() {
  }

}
