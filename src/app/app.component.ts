import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'test-server',content:'Just a test server'}];
  data = "parent data";

  oddNumber = false;
  value = 5;
  numbers = [1,2,3,4,5,6];
  onServerAdded(serverData: {serverName: string, serverContent: string}){
  	this.serverElements.push({
  		type: 'server',
  		name: serverData.serverName,
  		content: serverData.serverContent
  	});
  }

  onBluePrintAdded(blueprintData: {serverName: string, serverContent: string}){
  	this.serverElements.push({
  		type: 'blueprint',
  		name: blueprintData.serverName,
  		content: blueprintData.serverContent
  	})
  }

  changeData(){
    this.data = "parent data changed!!!";
  }

  destroyComponent(){
    //Won't applicable to primitive data types.
    //applicable in case of array and emptying the array
    //when *ngFor try to repeat the component template, since arr.length=0, component won't render
    //then ngOnDestroy will triggered
    this.data = null;
  }
}
