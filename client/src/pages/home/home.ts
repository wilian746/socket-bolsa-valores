import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocketProvider } from '../../providers/socket/socket';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public companies: any = [];

  constructor(public socket: SocketProvider, public navCtrl: NavController) { }

  ionViewDidLoad() {
    this.getCompanies()
    this.GetDataCompanies()
  }

  getCompanies() {
    this.socket.NewData().subscribe(data => {
      this.companies = data
    })
  }

  GetDataCompanies() {
    this.socket.GetData()
  }
}
