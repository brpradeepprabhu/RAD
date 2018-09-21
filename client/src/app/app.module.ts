import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {StepsModule} from 'primeng/steps';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Rad01ProjectSetupComponent } from './rad01-project-setup/rad01-project-setup.component';
import { Rad02DbdataSetupComponent } from './rad02-dbdata-setup/rad02-dbdata-setup.component';
import { Rad03ModelSetupComponent } from './rad03-model-setup/rad03-model-setup.component';
import { Rad04UiSetupComponent } from './rad04-ui-setup/rad04-ui-setup.component';
import { Rad05InstallPacComponent } from './rad05-install-pac/rad05-install-pac.component';
import { Rad00MainSetupComponent } from './rad00-main-setup/rad00-main-setup.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { BaseComponent } from './base/base.component';
@NgModule({
  declarations: [
    AppComponent,
    Rad01ProjectSetupComponent,
    Rad02DbdataSetupComponent,
    Rad03ModelSetupComponent,
    Rad04UiSetupComponent,
    Rad05InstallPacComponent,
    Rad00MainSetupComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StepsModule,
    InputTextModule,
    ButtonModule,
    
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
