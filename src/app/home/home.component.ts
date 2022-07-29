import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url=environment.baseUrl;
  route: string="";

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  onSubmit(){

    window.open("note/"+this.route,"_self");

  }

}
