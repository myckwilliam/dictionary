import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './modules/components/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { Environment } from './shared/models/environment';

@NgModule({
  declarations: [AppComponent, InputComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [Environment],
  bootstrap: [AppComponent],
})
export class AppModule {}
