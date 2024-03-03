import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrdComponent } from './prd/prd.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PrdDetailsComponent } from './prd-details/prd-details.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prd/:id', component: PrdDetailsComponent },
  { path: 'prd', component: PrdComponent },
]

@NgModule({
  declarations: [
    HomeComponent,
    MainLayoutComponent,
    PrdComponent,
    PrdDetailsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    CommonModule,
    HomeComponent,
    MainLayoutComponent,
    PrdComponent,
    PrdDetailsComponent
  ]
})
export class ComponentsModule { }
