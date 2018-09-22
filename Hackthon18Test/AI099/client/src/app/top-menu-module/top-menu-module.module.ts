import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[TopMenuComponent],
  declarations: [TopMenuComponent]
})
export class TopMenuModuleModule { }
