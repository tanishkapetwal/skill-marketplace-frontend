import { Injectable } from "@angular/core";
import { Client } from '@stomp/stompjs';
import { BehaviorSubject } from "rxjs";
import SockJs from 'sockjs-client';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private stompClient: Client;
  private notifications = new BehaviorSubject<any[]>([]);
  private custId: number | null = null;
  notifications$ = this.notifications.asObservable();
  constructor() {
    console.log("Inside notification Constructor");
    this.stompClient = new Client({
      webSocketFactory: () => new SockJs('http://localhost:8081/ws') as WebSocket,
      reconnectDelay: 5000
    });

    this.stompClient.onConnect = () => {
      console.log("connected to WebSocket");
      this.subscribeToGlobalNotifications();
      if (this.custId) {
        this.subscribeToCustomerTopic();
      }
    };

    this.stompClient.onStompError = (frame) => {
      console.error('Broker reported error: ' + frame.headers['message']);
      console.error('Additional details: ' + frame.body);
    };
    this.stompClient.activate();
  }
  setCustId(id: number) {
    this.custId = id;
    if (this.stompClient.connected) {
      this.subscribeToCustomerTopic();
    }
  }
   notificationData:Notification={userId:'',activeDevices:[],message:'',newLoginTime:''}
  subscribeToGlobalNotifications() {
    this.stompClient.subscribe('/topic/notifications', (message) => {
       this.notificationData = JSON.parse(message.body);

        console.log("Received notification:", this.notificationData);
    });
    return this.notificationData;
  }
  
  private subscribeToCustomerTopic() {
    if (!this.custId) return;
    this.stompClient.subscribe(`/topic/orders/${this.custId}`, (msg) => {
      console.log('Received customer-specific order notification:', msg.body);
      const body = JSON.parse(msg.body);
      const current = this.notifications.value;
      this.notifications.next([...current, body]);
    });
  }
}
type Notification={
    userId:string;
    activeDevices:any;
    newLoginTime:any;
    message:string;

}