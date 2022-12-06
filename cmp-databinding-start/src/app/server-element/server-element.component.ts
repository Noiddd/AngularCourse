import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input() element: { type: string; name: string; content: string };

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }
}
