import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  option: number;
  constructor() {
    this.option = 0;
   }

  ngOnInit(): void {
  }

  ShowAssistant(option: number){
    this.option = option;
  }

}
