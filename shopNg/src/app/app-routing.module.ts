import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { PrdComponent } from './components/prd/prd.component';
import { PrdDetailsComponent } from './components/prd-details/prd-details.component';
import { FooterComponent } from './shared/footer/footer.component';




const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'product',
        loadChildren: () => import('src/app/components/components.module').then(m => m.ComponentsModule)
      }
    ]
  }
  , { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
