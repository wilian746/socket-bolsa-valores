import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocketProvider } from '../../providers/socket/socket';

@Component({
  selector: 'page-company',
  templateUrl: 'company.html'
})
export class CompanyPage {

  companies: any = [
    { 'id': 0, 'name': '', 'value': null },
    { 'id': 1, 'name': '', 'value': null },
    { 'id': 2, 'name': '', 'value': null },
    { 'id': 3, 'name': '', 'value': null },
    { 'id': 4, 'name': '', 'value': null }
  ]

  constructor(public socket: SocketProvider, public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.getCompanies()
    this.GetDataCompanies()
  }

  GetDataCompanies() {
    this.socket.GetData()
  }

  getCompanies() {
    this.socket.NewData().subscribe(data => {
      this.companies = data
    })
  }

  updateCompany() {
    this.socket.UpdateCompanies([
      this.companies[0],
      this.companies[1],
      this.companies[2],
      this.companies[3],
      this.companies[4]
    ])
  }
}
