import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Rad00MainSetupComponent } from './rad00-main-setup/rad00-main-setup.component'
import { Rad01ProjectSetupComponent } from './rad01-project-setup/rad01-project-setup.component';
import { Rad02DbdataSetupComponent } from './rad02-dbdata-setup/rad02-dbdata-setup.component';
import { Rad03ModelSetupComponent } from './rad03-model-setup/rad03-model-setup.component';
import { Rad04UiSetupComponent } from './rad04-ui-setup/rad04-ui-setup.component';
import { Rad05InstallPacComponent } from './rad05-install-pac/rad05-install-pac.component';


@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forRoot([
            {
                path: 'mainsetup', component: Rad00MainSetupComponent,
                children: [
                    { path: 'projectsetup', component: Rad01ProjectSetupComponent },
                    { path: 'dbdatasetup', component: Rad02DbdataSetupComponent },
                    { path: 'modelsetup', component: Rad03ModelSetupComponent },
                    { path: 'uisetup', component: Rad04UiSetupComponent },
                    { path: 'installpac', component: Rad05InstallPacComponent }
                ]
            },
            { path: '**', redirectTo: 'login' }
        ])
    ],
    exports: [
        RouterModule,
    ],
    providers: [],

})
export class AppRoutingModule { }


