import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

/*
  Generated class for the SocketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SocketProvider {

  constructor(private socket: Socket) {}

  public connect(){
    this.socket.connect();
  }

  public disconnect(){
    this.socket.disconnect();
  }

  public UpdateCompanies(data) {
    this.socket.emit('UpdateCompanies', data);
  }

  public NewData(){
    return this.socket
      .fromEvent('NewData')
      // .map(data => data)
  }

  public GetData(){
    this.socket.emit('GetData');
  }
}
