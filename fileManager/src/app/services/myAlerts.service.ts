import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from '../components/home/dialogs/alert-dialog/alert-dialog.component';
import { result } from './../models/result';
@Injectable({
  providedIn: 'root'
})
export class MyAlertsService {
alertDialogRef:MatDialogRef<AlertDialogComponent>;
constructor(
  public matDialog : MatDialog
) { }

  resultAlert(s:result){
    var headers = "";
    if (s.proccess){
      headers = "İşlem başarılı";
    }else{
      headers = "Hata!"
    }

    this.alertDialogRef = this.matDialog.open(AlertDialogComponent,{
      width:"300px"
    });

    this.alertDialogRef.componentInstance.dialogHeader = headers;
    this.alertDialogRef.componentInstance.dialogMessage = s.message;
    this.alertDialogRef.componentInstance.dialogProccess = s.proccess;

    this.alertDialogRef.afterClosed().subscribe(d=>{
      this.alertDialogRef = null;
    });
  }

}
