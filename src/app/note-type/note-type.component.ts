import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';

import { Note } from '../note';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
} from 'rxjs';

@Component({
  selector: 'app-note-type',
  templateUrl: './note-type.component.html',
  styleUrls: ['./note-type.component.css'],
})
export class NoteTypeComponent implements OnInit {
  timeout: any = null;

  note: Note = {
    noteId: '',
    noteData: '',
  };

  isDivVisible = false;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.note.noteId = String(paramMap.get('note_id'));
      this.getNote(this.note.noteId);
    });
  }

  private createNote(note: Note) {
    this.noteService.createNote(note).subscribe((data) => {
      this.note.noteData = data.noteData;
      //   this.isDivVisible=true;
      //   setTimeout(() => {
      //     this.isDivVisible=false;
      // }, 3000);
    });
  }

  private getNote(noteId: String) {
    this.noteService.getNote(noteId).subscribe((data) => {
      this.note.noteData = data.noteData;
    });
  }

  // onSubmit(){
  //   this.createNote(this.note);
  // }

  noteChanged(event: any) {
    // setTimeout(() => {

    this.createNote(this.note);
    console.log('call made');
    // }, 2000);
  }

  onKeySearch(event: any) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.createNote($this.note);
        // console.log("api call made");
      }
    }, 1000);
  }



}
