import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {
  dialogHeader: string;
  dialogMessage: string;
  dialogProccess: boolean;
  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>
  ) { }

  ngOnInit() {
  }

}
