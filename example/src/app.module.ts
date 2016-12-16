import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExampleModule } from 'example-package';

import { AppComponent } from './app.component';
import { Client } from './client';

// export const client = {};
export const client = new Client();

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ExampleModule.forRoot(client)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
