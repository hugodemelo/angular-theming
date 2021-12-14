import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
  }

  ngOnInit(): void {
    this.document.firstElementChild!.setAttribute('color-scheme', 'to-do');
  }
}
