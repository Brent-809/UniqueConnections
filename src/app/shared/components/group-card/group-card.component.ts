import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss'],
})
export class GroupCardComponent implements OnInit {

  @Input()
  id!: number;
  @Input()
  image!: string;
  @Input()
  members!: number;
  @Input()
  name!: string;
  
  constructor() { }

  ngOnInit() {}

}
