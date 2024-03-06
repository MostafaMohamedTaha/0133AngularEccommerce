import { Component, HostBinding } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

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
  }
}