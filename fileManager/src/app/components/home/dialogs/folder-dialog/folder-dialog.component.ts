import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { folder } from 'src/app/models/folder';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-folder-dialog',
  templateUrl: './folder-dialog.component.html',
  styleUrls: ['./folder-dialog.component.css']
})
export class FolderDialogComponent implements OnInit {
  dialogHeader: string;
  procces: string;
  frm: FormGroup;
  newFolder: folder;
  constructor(
    public dialogRef: MatDialogRef<FolderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiService: ApiService,
    public frmBuild: FormBuilder,
  ) {
    this.newFolder = data.folder;
    this.procces = data.procces;
    if (this.procces == "add")
      this.dialogHeader = "Klasor Ekle"

    if (this.procces == "edit"){
      this.dialogHeader = "Klasor Düzenle"
    }
    this.frm = this.createFrom();
  }
  ngOnInit() {
  }

 // form oluşturma rutini
  createFrom():FormGroup{
    return this.frmBuild.group({
      folderName:[this.newFolder.folderName],
      folderGroupLevel:[this.newFolder.folderGroupLevel],
      folderId:[this.newFolder.folderId],
      folderOwnerId:[this.newFolder.folderOwnerId]
    });
  }

}
