import { Component } from '@angular/core';
import { NotificationService } from '../../modules/customer/service/notification.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-logged-in-devices',
  imports: [DatePipe],
  templateUrl: './user-logged-in-devices.html',
  styleUrl: './user-logged-in-devices.css'
})
export class UserLoggedInDevices {

  devices: Notification
  values:string[]=[]
  keys:string[]=[]
  currentDeviceId:any=''
  constructor(private notificationService: NotificationService) {

    console.log("in student dashboard: ngOnit---calling connect()")
    this.devices = this.notificationService.subscribeToGlobalNotifications();
    console.log(this.devices);
    console.log(this.devices.activeDevices);
    Object.keys
    this.values = Object.values(this.devices.activeDevices);
    this.keys = Object.keys(this.devices.activeDevices);
    this.currentDeviceId=localStorage.getItem('deviceId');
    
    
  }


}
type Notification = {
  userId: string;
  activeDevices: any;
  newLoginTime: any;
  message: string;

}