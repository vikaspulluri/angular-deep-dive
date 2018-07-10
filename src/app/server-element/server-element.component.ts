import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {
	@Input() element: {type: string, name: string, content: string};
  constructor() {  }

  ngOnInit() {
  	
  }

  ngOnChanges(changes: SimpleChanges) {
  	
  }

}
