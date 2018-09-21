import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rad01-project-setup',
  templateUrl: './rad01-project-setup.component.html',
  styleUrls: ['./rad01-project-setup.component.css']
})
export class Rad01ProjectSetupComponent extends BaseComponent implements OnInit {

  activeStep: any = 1;

  projectForm1: any;
  projectForm2: any;

  pathName: any;
  projectName: any;

  dbName: any;
  frontEnd: any;
  backEnd: any;


  DBMaster: any[];
  FrontEndMaster: any[];
  BackEndMaster: any[];


  constructor(private appService: AppService,
    private router: Router,
    private messageService: MessageService) {
    super();
    this.projectForm1 = new FormGroup({
      pathName: new FormControl('', [Validators.required]),
      projectName: new FormControl('', [Validators.required])
    });

    this.projectForm2 = new FormGroup({
      dbName: new FormControl('', [Validators.required]),
      frontEnd: new FormControl('', [Validators.required]),
      backEnd: new FormControl('', [Validators.required])
    });

    this.DBMaster = [
      { name: 'MongoDB', code: 'MongoDB', itemDisabled: false },
      { name: 'SQL', code: 'SQL', itemDisabled: true },
      { name: 'MySQL', code: 'MySQL', itemDisabled: true },
    ];

    this.FrontEndMaster = [
      { name: 'Angular', code: 'Angular', itemDisabled: false },
      { name: 'React', code: 'React', itemDisabled: true },
    ];

    this.BackEndMaster = [
      { name: 'Nodejs', code: 'Nodejs', itemDisabled: false },
      { name: 'Php', code: 'Php', itemDisabled: true },
      { name: 'Java', code: 'Java', itemDisabled: true },
    ];
  }

  ngOnInit() {
  }


  onNext() {
    const setProjectDetails = {
      projectName: this.projectForm1.controls.projectName.value,
      pathName: this.projectForm1.controls.pathName.value,
      dbName: this.projectForm2.controls.dbName.value,
      frontEnd: this.projectForm2.controls.frontEnd.value,
      backEnd: this.projectForm2.controls.backEnd.value
    }

    this.appService.setProjectDetails(setProjectDetails);
    this.activeStep = 2;
  }

  onSubmit() {
    const setProjectDetails = {
      projectName: this.projectForm1.controls.projectName.value,
      pathName: this.projectForm1.controls.pathName.value,
      dbName: this.projectForm2.controls.dbName.value,
      frontEnd: this.projectForm2.controls.frontEnd.value,
      backEnd: this.projectForm2.controls.backEnd.value
    }

    this.appService.setProjectDetails(setProjectDetails);

    const projectData = {
      projectName: this.projectForm1.controls.projectName.value,
      pathName: this.projectForm1.controls.pathName.value
    };

    this.appService.createProject(projectData)
      .pipe(takeUntil(this.ngUnSubscribe)).subscribe((data) => {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Project Details Submited' });
        this.router.navigate(['mainsetup/dbdatasetup']);
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Project Details Submit Failed' });
      });
  }
}
