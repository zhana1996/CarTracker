import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {

  public channel: any;

  constructor(public http: HttpClient) {
    const pusher = new Pusher('1f420441a89d17034c56', {
      cluster: 'eu',
    });

    this.channel = pusher.subscribe('vehicle');
  }

  public init() {
    return this.channel;
  }
}
