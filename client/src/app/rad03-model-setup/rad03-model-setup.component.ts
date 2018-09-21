import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AppService } from '../app.service';
import { BaseComponent } from '../base/base.component';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rad03-model-setup',
  templateUrl: './rad03-model-setup.component.html',
  styleUrls: ['./rad03-model-setup.component.css']
})
export class Rad03ModelSetupComponent extends BaseComponent implements OnInit, OnDestroy {
  modelForm: any;
  DataTypeMaster: any;
  constructor(private appService: AppService,
    private router: Router,
    private messageService: MessageService,
    private fb: FormBuilder) {
    super();
    this.modelForm = this.fb.group({
      name: ['', Validators.required],
      data: this.fb.array([
        this.initItemRows()
      ])
    });

    this.DataTypeMaster = [
      { name: 'String', code: 'String' },
      { name: 'Number', code: 'Number' },
      { name: 'Date', code: 'Date' },
      { name: 'Array', code: 'Array' },
      { name: 'Boolean', code: 'Boolean' }
    ];
  }

  ngOnInit() {
  }

  initItemRows() {
    return this.fb.group({
      // list all your form controls here, which belongs to your form array
      fieldName: ['', Validators.required],
      datatype: ['', Validators.required]
    });
  }

  onAddRowClick() {
    // control refers to your formarray
    const control = <FormArray>this.modelForm.controls['data'];
    // add new formgroup
    control.push(this.initItemRows());
  }

  onDeleteRowClick(index: number) {
    // control refers to your formarray
    const control = <FormArray>this.modelForm.controls['data'];
    // remove the chosen row
    control.removeAt(index);
  }

  onSubmit() {
    // {"projectName":"testApp","pathName":"/home/pradeep/","model":{"name":"team","data":"{first_name:String,last_name:String}"}}
    let dataList = '';
    this.modelForm.value.data.forEach((element, index) => {
      dataList += (index == 0 ? '{' : '') + element.fieldName + ':' + element.datatype.code + (((this.modelForm.value.data.length - 1) == index)? '}': ',');
    });
    const dbData = {
      projectName: this.appService.projectName,
      pathName: this.appService.pathName,
      model: { name: this.modelForm.value.name, data: dataList }
    };


    console.log(dbData);
    this.appService.createModel(dbData)
      .pipe(takeUntil(this.ngUnSubscribe)).subscribe((data) => {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Model Details Submited' });
        this.router.navigate(['mainsetup/uisetup']);
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Model Details Submit Failed' });
      });
  }
}
