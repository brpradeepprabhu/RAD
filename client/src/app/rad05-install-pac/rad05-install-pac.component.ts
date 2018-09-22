import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppService } from '../app.service';
import { BaseComponent } from '../base/base.component';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rad05-install-pac',
  templateUrl: './rad05-install-pac.component.html',
  styleUrls: ['./rad05-install-pac.component.css']
})
export class Rad05InstallPacComponent extends BaseComponent implements OnInit, OnDestroy {
  show: boolean = true;
  type: string = '';

  constructor(private appService: AppService,
    private messageService: MessageService, 
    private router:Router) {
    super();
  }

  ngOnInit() {
  }

  onSubmit(type) {
    if (type == 'Yes') {
      this.type = type;
      const installData = {
        projectName: this.appService.projectName,
        pathName: this.appService.pathName
      };

      this.appService.installProjectDependencies(installData)
        .pipe(takeUntil(this.ngUnSubscribe)).subscribe((data) => {
          this.show = false;
          this.router.navigate(['/complete']);
          this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Downloaded the dependencies successfully' });
        }, error => {
          this.show = false;
          this.router.navigate(['/complete']);
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Download of dependencies failed' });
        });
    } else {
      this.type = type;
      this.router.navigate(['/complete']);
    }
  }

}

