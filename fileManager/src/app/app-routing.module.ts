import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileComponent } from './components/file/file.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [{
  path: '',
  component:HomeComponent,
},
{
  path: 'fileList/:folderId',
  component:FileComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
