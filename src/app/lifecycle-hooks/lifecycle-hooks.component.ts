import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
	@Input() data;
	log = console.log;
  constructor() { 
  	this.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
  	this.log('ngOnchanges called');
  	this.log(changes);
  }

  ngOnInit() {
  	this.log('ngOnInt called');
  }

  ngDoCheck(){
  	this.log('ngDoCheck called');
  }

  ngAfterContentInit(){
  	this.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
  	this.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
  	this.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(){
  	this.log('ngAfterViewChecked called');
  }

  ngOnDestroy(){
  	this.log('OnDestroy called');
  }

}
