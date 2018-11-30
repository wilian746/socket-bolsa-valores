import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocketProvider } from '../../providers/socket/socket';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  companies: any = [];

  constructor(public socket: SocketProvider, public navCtrl: NavController) {
    this.getCompanies()
  }

  ionViewDidLoad() {
    this.updateCompany([
      { 'id': 0, 'name': 'Ducks Sports', 'value': 16 },
      { 'id': 1, 'name': 'Samsung', 'value': 12 },
      { 'id': 2, 'name': 'Bar do satan', 'value': 25 },
      { 'id': 3, 'name': 'Nike', 'value': 20 },
      { 'id': 4, 'name': 'Google', 'value': 21 }
    ])

    this.getCompanies()
  }

  getCompanies() {
    this.socket.NewData().subscribe(data => {
      this.companies = data
      console.log('asdlfjkaslçdfçasdfjçlsdaf', this.companies)
    })
  }

  updateCompany(updateData) {
    if (updateData) {
      this.socket.UpdateCompanies(updateData)
    } else {
      this.socket.UpdateCompanies(this.companies)
    }
  }

}
