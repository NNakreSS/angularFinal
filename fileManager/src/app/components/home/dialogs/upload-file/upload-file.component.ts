import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { file } from 'src/app/models/file';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  frm: FormGroup;
  newFile: file = new file();
  selectFile: any;

  constructor(
    public dialogRef: MatDialogRef<UploadFileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiServis: ApiService
  ) { }

  ngOnInit() {

  }

  fileName(name) {
    this.newFile.fileName = name.target.value;
  }

  sFile(e: any) {
    var files = e.target.files;
    var file = files[0];
    var fr = new FileReader();
    fr.onload = () => {
      this.selectFile = fr.result,
        this.newFile.fileUrl = fr.result.toString();
        this.newFile.fileOwnerId = "01";
    }
    fr.readAsDataURL(file);
  }

}
