import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRouteRoutingModule } from './product-route-routing.module';
import { IgcFormControlDirective, IgcFormsModule, IgxButtonModule, IgxCardModule,IgxIconComponent, IgxIconModule, IgxRippleModule } from 'igniteui-angular';
import { FormsModule } from "@angular/forms";
import { IgcRatingComponent,defineComponents } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent)



@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    ProductRouteRoutingModule,
    IgcFormsModule,
    IgxCardModule,
    IgcFormControlDirective,
    IgxIconComponent,
    IgxButtonModule,
    IgxCardModule,
    IgcFormsModule,
    IgxIconModule,
    IgxRippleModule,
    FormsModule,
  ]
})
export class ProductModule { }
