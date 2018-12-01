import { Component } from '@angular/core';

import { CompanyPage } from '../company/company';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = CompanyPage;

  constructor() {

  }
}
