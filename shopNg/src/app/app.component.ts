import { Component, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';
  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
  @HostBinding('class.dark') get mode() {
    return this.darkMode;
  }
  ngOnInit(): void {
    initFlowbite();
    this.loadTranslations();
  }

    //#region  params
    isTranslated: boolean = false
    //#endregion
    //#region  translate
    constructor(private TranslateService: TranslateService, private renderer: Renderer2, private el: ElementRef) {
      //#region  translate 
  
      this.TranslateService.setDefaultLang('en'); // Set your default language
      this.TranslateService.use('en'); // Set the initial language to use
      this.TranslateService.onLangChange.subscribe(() => {
        // Set isTranslated to true when translated content is displayed
        this.isTranslated = true;
      });
      //#endregion
    }

    loadTranslations() {
      // Here you can load translations using the translate service.
      // For example, if you have translation files, you can load them like this:
      this.TranslateService.get('key').subscribe((res: string) => {
        console.log(res)
      });
    }
    translate(event: any) {
      this.TranslateService.use(event.target.value)
    }
    //#endregion
}