import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-rad01-project-setup',
  templateUrl: './rad01-project-setup.component.html',
  styleUrls: ['./rad01-project-setup.component.css']
})
export class Rad01ProjectSetupComponent implements OnInit {

  activeStep: any = 1;
  cities: any[];

  folderPath: any;
  projectName: any;

  dbName: any;
  frontEnd: any;
  backEnd: any;


  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit() {
  }


  onNext() {
    this.activeStep = 2;
  }
}
