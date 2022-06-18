import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';
import {Note} from '../note';

@Component({
  selector: 'app-note-type',
  templateUrl: './note-type.component.html',
  styleUrls: ['./note-type.component.css']
})
export class NoteTypeComponent implements OnInit {

  note:Note={
      noteId: "",
      noteData: ""
  };
  
  constructor(private route: ActivatedRoute, private noteService: NoteService) { }

  ngOnInit(): void {

      this.route.paramMap.subscribe(paramMap =>{

        this.note.noteId=String(paramMap.get('note_id'));
        this.getNote(this.note.noteId);
      
      });

  }


  private createNote( note: Note){
    this.noteService.createNote(note).subscribe(data =>{
      this.note.noteData=data.noteData;
    });
  }

  private getNote(noteId: String){
    this.noteService.getNote(noteId).subscribe(data=>{
      this.note.noteData=data.noteData;
    });
  }

  onSubmit(){
    this.createNote(this.note);
  }

}
