import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() titleIcon: string | undefined;
  @Input() rightIcon: string | undefined;
  @Input() titleContent: string | undefined;
  @Input() value: string | undefined;
  @Input() limitText: string | undefined;
  @Input() limit: string | undefined;
  @Input() footer: string | undefined;
  @Input() footerIcon: string | undefined;

  constructor() { }

  ngOnInit() {}

}
