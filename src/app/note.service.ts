import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  baseUrl = environment.production;

  constructor(private httpClient: HttpClient) { }

  createNote(note: Note): Observable<any>{

    return this.httpClient.post(`${this.baseUrl}/${note.noteId}`,note,{responseType:'json'});
  }


  getNote(noteId: String):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${noteId}`);
  }

  
}
