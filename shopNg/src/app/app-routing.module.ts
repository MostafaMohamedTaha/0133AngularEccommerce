import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main/main.component';
import { HomeComponent } from './components/main/home/home.component';

const routes: Routes = [
  
    {
      path: '', component: MainComponent, 
      children: [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent }, // if not here will not shown with other children inside mainLayout
        {
          path: 'prd',
          loadChildren: () => import('src/app/components/product/product.module').then(m => m.ProductModule)
        }
      ]
    },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
