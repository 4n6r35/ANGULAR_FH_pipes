import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

/* Configuracion del locale de la app */
import localEsCO from "@angular/common/locales/es-CO";
import localEnUG from "@angular/common/locales/en-UG";
import localPtBR from "@angular/common/locales/pt-PT";

import { registerLocaleData } from "@angular/common";

registerLocaleData(localEsCO)
registerLocaleData(localEnUG)
registerLocaleData(localPtBR)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [
    /* Configuracion del idioma de la pagina */
    { provide: LOCALE_ID, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
