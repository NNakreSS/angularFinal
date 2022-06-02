import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { file } from '../models/file';
import { folder } from '../models/folder';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = "https://localhost:44323/api/"; 
constructor(
  public http: HttpClient 
) { }
 
// Folder api methods
 getFolderList(){
   return this.http.get(this.apiUrl+"getFolderList")
 }

 getFolderById(id: string){
   return this.http.get(this.apiUrl+"getFolderById/"+id)
 }

 addFolder(folder:folder){
    return this.http.post(this.apiUrl+"addFolder",folder)
 }

 deleteFolder(id:string){
    return this.http.delete(this.apiUrl+"deleteFolder/"+id)
 }

 editFolder(folder:folder){
  return this.http.put(this.apiUrl+"editFolder",folder)
 }

 FolderInFiles(id:string){
  return this.http.get(this.apiUrl+"folderInFiles/"+id)
 }

// user api methods
 getUserList(){
    return this.http.get(this.apiUrl+"getUserList")
 }

 getUserById(id:string){
    return this.http.get(this.apiUrl+"getUserById/"+id)
 }

 addUser(user:user){
    return this.http.post(this.apiUrl+"addUser",user)
 }

 editUser(user:user){
   return this.http.post(this.apiUrl+"editUser",user)
 }

 deleteUser(id:string){
  return this.http.delete(this.apiUrl+"deleteUser/"+id)
 }

 // file api methods

 getFileList(){
   return this.http.get(this.apiUrl+"getFileList")
 }

 getFileById(id:string){
  return this.http.get(this.apiUrl+"getFileById/"+id)
 }

 getFolderInFile(id:string){
  return this.http.get(this.apiUrl+"getFolderInFile/"+id)
 }

 addFile(file:file){
   return this.http.post(this.apiUrl+"addFile",file)
 }

 editFile(file:file){
   return this.http.post(this.apiUrl+"editFile",file)
 }

 deleteFile(id:string){
  return this.http.delete(this.apiUrl+"deleteFile/"+id)
 }

}
