import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AppMatarialgModule } from './app-matarial.module';
import { AlertDialogComponent } from './components/home/dialogs/alert-dialog/alert-dialog.component';
import { MyAlertsService } from './services/myAlerts.service';
import { ConfirmDialogComponent } from './components/home/dialogs/confirm-dialog/confirm-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { FolderDialogComponent } from './components/home/dialogs/folder-dialog/folder-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileComponent } from './components/file/file.component';
import { UploadFileComponent } from './components/home/dialogs/upload-file/upload-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    FileComponent,

    //Dialoglar
    AlertDialogComponent,
    ConfirmDialogComponent,
    FolderDialogComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMatarialgModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AlertDialogComponent, ConfirmDialogComponent, FolderDialogComponent,UploadFileComponent],
  providers: [MyAlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
