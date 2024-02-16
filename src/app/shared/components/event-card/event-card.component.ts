import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-event-card",
  templateUrl: "./event-card.component.html",
  styleUrls: ["./event-card.component.scss"],
})
export class EventCardComponent implements OnInit {
  @Input()
  name!: string;
  @Input()
  description!: string;
  @Input()
  image!: string;
  @Input()
  date!: Date[];
  @Input()
  from!: string;
  @Input()
  to!: string;
  @Input()
  location!: string;
  @Input()
  avatars!: string[];
  @Input()
  total!: number;
  @Input()
  allowJoin!: boolean;

  constructor() {}

  ngOnInit() {}
}
