import { Component, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isApploading: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.isApploading = true;
    }, 7000);
  }
}
