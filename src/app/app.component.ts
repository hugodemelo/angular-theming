import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

type ColorScheme = 'light' | 'dark';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
  }

  ngOnInit(): void {
    this.#setColorScheme('dark');
  }

  applyTheme({ target }: Event): void {
    const value = (target as HTMLInputElement).value as ColorScheme;
    this.#setColorScheme(value);
  }

  #setColorScheme(scheme: ColorScheme): void {
    this.document.firstElementChild!.setAttribute('color-scheme', scheme);
  }
}
