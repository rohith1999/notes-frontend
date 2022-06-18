import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteTypeComponent } from './note-type/note-type.component';
import { PageNFoundComponent } from './page-n-found/page-n-found.component';

const routes: Routes = [
  {
    path: "note/:note_id", component: NoteTypeComponent}, {path:'**',component: PageNFoundComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
