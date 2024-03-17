import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { bootstrapCart4, bootstrapTrash3, bootstrapInfoCircleFill, bootstrapList, bootstrapMoonStarsFill, bootstrapSunFill } from '@ng-icons/bootstrap-icons';
import { NgIconsModule } from '@ng-icons/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


export function translateFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}
const routes:Routes=[

]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgIconsModule.withIcons({ bootstrapCart4, bootstrapTrash3, bootstrapInfoCircleFill,bootstrapList,bootstrapMoonStarsFill,bootstrapSunFill}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
