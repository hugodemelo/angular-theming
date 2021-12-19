import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-option',
  templateUrl: './theme-option.component.html',
  styleUrls: ['./theme-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeOptionComponent implements OnInit {

  @Input() theme!: string;

  constructor(private readonly elementRef: ElementRef) {
  }

  ngOnInit(): void {
    ['brand', 'background', 'tile1', 'tile2', 'tile3', 'tile4'].forEach(prop => {
      this.elementRef.nativeElement.style.setProperty(`--${prop}`, `var(--${prop}-${this.theme})`);
    });
  }
}
