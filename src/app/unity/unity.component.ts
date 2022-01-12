import { Component, Input, OnInit,Injectable,EventEmitter } from '@angular/core';

declare var window: any;
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.scss']
})
export class UnityComponent implements OnInit {
  public myResultList: string = "5";
  unityInstance: any;
  @Input() appLocation: string = '../assets/temperatura/temperatura.json';
  @Input() appWidth: string = '800';
  @Input() appHeight: string = '600';

   enviromentTempValue = "24";


  
  constructor() { }

  ngOnInit() {
    window['receiveMessageFromUnity'] = this.receiveMessageFromUnity;
    if (this.appLocation) {
      this.loadProject(this.appLocation);
    }
  }

  public loadProject(path: string) {
    this.unityInstance = window['UnityLoader'].instantiate('unityContainer', path);
  }

  public sendMessageToUnity(objectName: string, methodName: string, messageValue: string) {
    console.log('sendMessageToUnity', objectName, methodName, messageValue);
    this.unityInstance.SendMessage(objectName, methodName, messageValue);
  }

  public receiveMessageFromUnity(messageValue: string) {
    console.log('receiveMessageFromUnity', messageValue);
    
    this.enviromentTempValue = messageValue;
    console.log('El value es  ', this.enviromentTempValue);
  }

  public getEnviromentTempValue(){
    return this.enviromentTempValue; 
  }


}
