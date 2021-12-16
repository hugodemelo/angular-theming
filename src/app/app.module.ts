import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThemeOptionComponent } from './theme-option/theme-option.component';

@NgModule({
  declarations: [ AppComponent, ThemeOptionComponent ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
