import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public cartCount: number = 0;
  constructor(private prd:ProductService){}
  ngOnInit(): void {
    this.prd.products().subscribe(x=>this.cartCount=x.length)
  }
  @Input() darkMode: boolean = false;
  @Output() toggleDarkMode = new EventEmitter<void>();
  toggleDarkModeClicked() {
    this.toggleDarkMode.emit();
  }


}
