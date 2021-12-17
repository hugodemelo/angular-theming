import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  readonly THEMES = [ 'microsoft', 'netflix', 'slack' ];
  selectedTheme!: string;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
  }

  ngOnInit(): void {
    this.applyTheme('microsoft');
  }

  applyTheme(theme: string): void {
    this.selectedTheme = theme;
    this.document.firstElementChild!.setAttribute('color-scheme', theme);
  }
}
