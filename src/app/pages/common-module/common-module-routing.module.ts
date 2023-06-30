import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModuleComponent } from './common-module.component';

const routes: Routes = [
  {
    path: '',
    component: CommonModuleComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonModuleRoutingModule { }
