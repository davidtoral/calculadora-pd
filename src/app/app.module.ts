import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { ArticulosService } from './services/articulos.service';
import { CantidadDialogComponent } from './components/cantidad-dialog/cantidad-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FilterPipe } from './pipes/filter.pipe';
import { ArmasDialogComponent } from './components/armas-dialog/armas-dialog.component';
import { DrogasDialogComponent } from './components/drogas-dialog/drogas-dialog.component';
import { AtenuantesAgravantesDialogComponent } from './components/atenuantes-agravantes-dialog/atenuantes-agravantes-dialog.component';
import { DesgloseDialogComponent } from './components/desglose-dialog/desglose-dialog.component';
import { AngularResizedEventModule } from 'angular-resize-event';
import { AdvertenciaDialogComponent } from './components/advertencia-dialog/advertencia-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    CantidadDialogComponent,
    ArmasDialogComponent,
    DrogasDialogComponent,
    AtenuantesAgravantesDialogComponent,
    DesgloseDialogComponent,
    AdvertenciaDialogComponent,
    FilterPipe
  ],
  imports: [
  CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularResizedEventModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [ArticulosService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
