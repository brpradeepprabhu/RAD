import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppService } from '../app.service';
import { BaseComponent } from '../base/base.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rad05-install-pac',
  templateUrl: './rad05-install-pac.component.html',
  styleUrls: ['./rad05-install-pac.component.css']
})
export class Rad05InstallPacComponent extends BaseComponent implements OnInit, OnDestroy {
  show = false;

  constructor(private appService: AppService,
    private messageService: MessageService) {
    super();
  }

  ngOnInit() {
  }

  onSubmit(type) {
    if (type == 'Yes') {
      const dbData = {
        projectName: this.appService.projectName,
        pathName: this.appService.pathName
      };

      this.appService.installProjectDependencies()
        .pipe(takeUntil(this.ngUnSubscribe)).subscribe((data) => {
          this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Model Details Submited' });
        }, error => {
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Model Details Submit Failed' });
        });
    }
  }

}

