import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { folder } from 'src/app/models/folder';
import { result } from 'src/app/models/result';
import { ApiService } from 'src/app/services/api.service';
import { MyAlertsService } from 'src/app/services/myAlerts.service';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { FolderDialogComponent } from './dialogs/folder-dialog/folder-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  folderDialogRef: MatDialogRef<FolderDialogComponent>;
  confirmDialogRef: MatDialogRef<ConfirmDialogComponent>
  folders: folder[];
  displayedColumns = ["folderName", "folderCreateTime","folderFileCount", "islemler" ];
  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public alert: MyAlertsService,
    public matDialog: MatDialog,
    public apiService: ApiService,
    public alertService: MyAlertsService
  ) { }

  ngOnInit() {
    this.folderList()
  }

  // klasor listeleme rutini
  folderList() {
    this.apiService.getFolderList().subscribe((d: folder[]) => {
      this.folders = d;
      this.dataSource = new MatTableDataSource(this.folders)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      // console.log(this.folders)
    })
  }


  //klasor filtreleme rutini
  filter(key) {
    var d = key.target.value;
    this.dataSource.filter = d.trim().toLowerCase();
    if (this.dataSource.paginator)
      this.dataSource.paginator.firstPage;
  }

  // klasor ekleme rutini
  addFolder() {
    var newFolder: folder = new folder();
    this.folderDialogRef = this.matDialog.open(FolderDialogComponent, {
      width: "100%", data: {
        folder: newFolder,
        procces: "add"
      }
    });
    this.folderDialogRef.afterClosed().subscribe(d => {
      if (!d)
        return;
      d.folderOwnerId = "01";
      d.folderCreateTime = new Date().toLocaleString();
      console.log(d.folderCreateTime)
      this.apiService.addFolder(d).subscribe((s: result) => {
        this.alertService.resultAlert(s);
        if (s.proccess) {
          this.folderList();
        }
      })
    });
  }

  // klasor düzenleme rutini
  editFolder(folder: folder) {
    this.folderDialogRef = this.matDialog.open(FolderDialogComponent, {
      width: "100%", data: {
        folder: folder,
        procces: "edit"
      }
    });
    this.folderDialogRef.afterClosed().subscribe(d => {
      console.log(d)
      this.apiService.editFolder(d).subscribe((s: result) => {
        this.alertService.resultAlert(s);
        if (s.proccess) {
          this.folderList();
        }
      })
    });
  }

  // klasör silme rutini
  deleteFolder(folder: folder) {
    this.confirmDialogRef=this.matDialog.open(ConfirmDialogComponent,{
      width: "500px"
    })
    this.confirmDialogRef.componentInstance.dialogMessage=folder.folderName +"  İsimli klasör içerisindeki bütün dosyalar ile beraber silinecek , devam etmek istediğinize emin misiniz."
    this.confirmDialogRef.afterClosed().subscribe(s=>{
      if (s) {
        this.apiService.deleteFolder(folder.folderId).subscribe((s:result)=>{
          this.alertService.resultAlert(s);
          if (s) {
            this.folderList();
          }
        })
      }
    })
  }

  // test
  // ShowAlert(b: boolean) {
  //   var s: result = new result();
  //   s.proccess = b
  //   s.message = "Bu bir Test mesajıdır"
  //   this.alert.resultAlert(s);
  // }

  // ShowConfirm() {
  //   this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent, { width: "300px" });
  //   this.confirmDialogRef.componentInstance.dialogMessage = "Kayıt silinecektir onaylıyor musunuz ?"
  //   this.confirmDialogRef.afterClosed().subscribe(result => {
  //     // console.log(result)
  //     if (result) {
  //       // silme rutini
  //     }
  //   })
  // }

}
