import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import { MessageService } from 'primeng/api';
import { AppService } from '../app.service';
import { BaseComponent } from '../base/base.component';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rad04-ui-setup',
  templateUrl: './rad04-ui-setup.component.html',
  styleUrls: ['./rad04-ui-setup.component.css']
})
export class Rad04UiSetupComponent extends BaseComponent implements OnInit, OnDestroy {

  uiForm: any;
  constructor(private appService: AppService,
    private router: Router,
    private messageService: MessageService) {
    super();
    this.uiForm = new FormGroup({
      menu: new FormControl('', [Validators.required])
  });
  }

  ngOnInit() {
  }


  onSubmit() {  
    const uiData = {
      projectName: this.appService.projectName,
      pathName: this.appService.pathName,
      menu: this.uiForm.value.menu
    };

    this.appService.createUI(uiData)
      .pipe(takeUntil(this.ngUnSubscribe)).subscribe((data) => {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'UI Details Submited' });
        this.router.navigate(['mainsetup/installpac']);
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'UI Details Submit Failed' });
      });
  }

}
