import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss'],
})
export class StoryCardComponent implements OnInit {

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
