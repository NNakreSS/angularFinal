import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { file } from 'src/app/models/file';
import { folder } from 'src/app/models/folder';
import { result } from 'src/app/models/result';
import { ApiService } from 'src/app/services/api.service';
import { MyAlertsService } from 'src/app/services/myAlerts.service';
import { UploadFileComponent } from '../home/dialogs/upload-file/upload-file.component';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  files:file[];
  selectFolder:folder;
  folderId:string;
  displayedColumns=['fileName' , 'fileUpploadTime', 'fileType' , 'islemler'];
  dataSource:any;
  dialogRef: MatDialogRef<UploadFileComponent>;
  newFile:file;
  constructor(
    public apiService: ApiService,
    public alertService: MyAlertsService,
    public router: ActivatedRoute,
    public matDialog: MatDialog,
  ) { }

  ngOnInit() {
    this.router.params.subscribe(p=>{
      // console.log(p)
      if(p){
        this.folderId = p.folderId;
        this.getFolderById();
      }
    })
  }

  // dosya listeleme rutini
  fileList(){
    this.apiService.getFolderInFile(this.folderId).subscribe((d:file[])=>{
      this.files = d;
    })
  }

// klasör bilgilerini getirme rutini
  getFolderById(){
    this.apiService.getFolderById(this.folderId).subscribe((d:folder)=>{
      this.selectFolder = d;
    })
  }

  // dosya filtreleme rutini
  filter(s){

  }
  // Dosya ekleme rutini
  addFile(){
    this.dialogRef=this.matDialog.open(UploadFileComponent,{
      width:"400px",
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if (d) {
        console.log(d.fileUrl);
        this.newFile.inFolderId = this.folderId;
        // this.apiService.addFile(this.newFile).subscribe((s:result)=>{
        //   this.alertService.resultAlert(s);
        //   if (s.proccess) {
        //     this.getFolderById();
        //   }
        // })
      }
    })
  }

}
