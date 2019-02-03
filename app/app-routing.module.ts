import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ApplyComponent } from './apply/apply.component';
import { LoggComponent } from './logg/logg.component';

const routes: Routes = [{path:'home',component:HeaderComponent},
{path:'apply',component:ApplyComponent},
{path:'logg',component:LoggComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
