import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-option',
  templateUrl: './theme-option.component.html',
  styleUrls: [ './theme-option.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeOptionComponent implements OnInit {

  @Input() theme!: string;

  constructor(private readonly elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.setProperty('--brd', `var(--brand-${ this.theme })`);
    this.elementRef.nativeElement.style.setProperty('--back', `var(--background-${ this.theme })`);
    this.elementRef.nativeElement.style.setProperty('--t1', `var(--tile1-${ this.theme })`);
    this.elementRef.nativeElement.style.setProperty('--t2', `var(--tile2-${ this.theme })`);
    this.elementRef.nativeElement.style.setProperty('--t3', `var(--tile3-${ this.theme })`);
    this.elementRef.nativeElement.style.setProperty('--t4', `var(--tile4-${ this.theme })`);
  }
}
