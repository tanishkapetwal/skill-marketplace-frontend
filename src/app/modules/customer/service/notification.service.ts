import { Injectable } from "@angular/core";
import {Client, CompatClient, Stomp} from '@stomp/stompjs';
import { BehaviorSubject } from "rxjs";
import  SockJs from 'sockjs-client'

@Injectable({providedIn:'root'})
export class NotificationService{
    private stompClient: Client;
    private notifications= new BehaviorSubject<any[]>([]);
    private custId: number | null = null;

    notifications$ = this.notifications.asObservable();

    setCustId(id:number){
        this.custId = id;
        if(this.stompClient.connected){
            this.subscribeToCustomerTopic();
        }
    }

    private subscribeToCustomerTopic(){
            if(!this.custId)return;
             this.stompClient.
                subscribe(`/topic/orders/${this.custId}`,(msg)=>{
                    console.log(msg.body);
                    const body = JSON.parse(msg.body)
                    const current = this.notifications.value;
                    this.notifications.next([...current,body]);
                });
        } 
    constructor(){
        
        this.stompClient = new Client({webSocketFactory: ()=>
            new SockJs ('http://localhost:8081/ws'),reconnectDelay:5000});
            this.stompClient.onConnect = ()=>{
                console.log("connected")
               if(this.custId){
                this.subscribeToCustomerTopic();
               }
            };
            this.stompClient.activate()
    }
    

}