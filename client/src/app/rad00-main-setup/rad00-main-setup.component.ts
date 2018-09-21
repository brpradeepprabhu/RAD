import { Component, OnInit } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rad00-main-setup',
  templateUrl: './rad00-main-setup.component.html',
  styleUrls: ['./rad00-main-setup.component.css']
})
export class Rad00MainSetupComponent implements OnInit {

  items: any[];
  activeIndex: number = 0;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // console.log(location);
        // console.log(val);
        if(val.url == '/mainsetup/projectsetup'){
          this.activeIndex = 0
        }else if(val.url == '/mainsetup/dbdatasetup'){
          this.activeIndex = 1
        }else if(val.url == '/mainsetup/modelsetup'){
          this.activeIndex = 2
        }else if(val.url == '/mainsetup/uisetup'){
          this.activeIndex = 3
        }else if(val.url == '/mainsetup/installpac'){
          this.activeIndex = 4
        }
      }
      // if(location != ''){
      //   //this.route = location.path();
      // } else {
      //   //this.route = 'Home'
      //   console.log(location);
      // }
    });

  }

  ngOnInit() {
    this.items = [
      { label: 'Project' },
      { label: 'Data Base' },
      { label: 'Model' },
      { label: 'UI' },
      { label: 'Installation' }
    ];
  }

  onMenuClick() {
    if (this.activeIndex == 0) {
      this.router.navigate(['mainsetup/projectsetup']);
    } else if (this.activeIndex == 1) {
      this.router.navigate(['mainsetup/dbdatasetup']);
    } else if (this.activeIndex == 2) {
      this.router.navigate(['mainsetup/modelsetup']);
    } else if (this.activeIndex == 3) {
      this.router.navigate(['mainsetup/uisetup']);
    } else if (this.activeIndex == 4) {
      this.router.navigate(['mainsetup/installpac']);
    }
  }

}
