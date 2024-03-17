import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public cartCount: number = 0;
  constructor(private prd:ProductService,private TranslateService: TranslateService){}
  ngOnInit(): void {
    this.prd.products().subscribe(x=>this.cartCount=x.length)
  }
  @Input() darkMode: boolean = false;
  @Output() toggleDarkMode = new EventEmitter<void>();
  toggleDarkModeClicked() {
    this.toggleDarkMode.emit();
  }

  translate(event: any) {
    this.TranslateService.use(event.target.value)
  }
}
