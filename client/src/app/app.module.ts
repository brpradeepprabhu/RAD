import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {StepsModule} from 'primeng/steps';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { Rad01ProjectSetupComponent } from './rad01-project-setup/rad01-project-setup.component';
import { Rad02DbdataSetupComponent } from './rad02-dbdata-setup/rad02-dbdata-setup.component';
import { Rad03ModelSetupComponent } from './rad03-model-setup/rad03-model-setup.component';
import { Rad04UiSetupComponent } from './rad04-ui-setup/rad04-ui-setup.component';
import { Rad05InstallPacComponent } from './rad05-install-pac/rad05-install-pac.component';
import { Rad00MainSetupComponent } from './rad00-main-setup/rad00-main-setup.component';

@NgModule({
  declarations: [
    AppComponent,
    Rad01ProjectSetupComponent,
    Rad02DbdataSetupComponent,
    Rad03ModelSetupComponent,
    Rad04UiSetupComponent,
    Rad05InstallPacComponent,
    Rad00MainSetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
