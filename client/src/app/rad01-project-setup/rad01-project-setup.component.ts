import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rad01-project-setup',
  templateUrl: './rad01-project-setup.component.html',
  styleUrls: ['./rad01-project-setup.component.css']
})
export class Rad01ProjectSetupComponent implements OnInit {

  activeStep: any = 1;

  projectForm1: any;
  projectForm2: any;

  folderPath: any;
  projectName: any;

  dbName: any;
  frontEnd: any;
  backEnd: any;


  DBMaster: any[];
  FrontEndMaster: any[];
  BackEndMaster: any[];


  constructor() {

    this.projectForm1 = new FormGroup({
      folderPath: new FormControl('', [Validators.required]),
      projectName: new FormControl('', [Validators.required])
    });

    this.projectForm2 = new FormGroup({
      dbName: new FormControl('', [Validators.required]),
      frontEnd: new FormControl('', [Validators.required]),
      backEnd: new FormControl('', [Validators.required])
    });

    this.DBMaster = [
      { name: 'MongoDB', code: 'MongoDB' },
      { name: 'SQL', code: 'SQL' },
      { name: 'MySQL', code: 'MySQL' },
    ];

    this.FrontEndMaster = [
      { name: 'Angular', code: 'Angular' },
      { name: 'React', code: 'React' },
    ];

    this.BackEndMaster = [
      { name: 'Nodejs', code: 'Angular' },
      { name: 'Php', code: 'Php' },
      { name: 'Java', code: 'Java' },
    ];
  }

  ngOnInit() {
  }


  onNext() {
    this.activeStep = 2;
  }

  onSubmit() {

  }
}
