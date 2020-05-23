import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { EventsPage } from '../events/events';
import { ViewEntriesPage } from '../view-entries/view-entries';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  	selector: 'page-dashboard',
  	templateUrl: 'dashboard.html',
})
export class DashboardPage {

	user: any

  	constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
		this.user = firebase.auth().currentUser;
		if(this.user != null)
		{
		}
		else{
			const alert = this.alertCtrl.create({
				title: 'You are not Logged in!',
				subTitle: 'Please login!',
				buttons: ['OK']
			});
			alert.present().then(data => {
				this.navCtrl.push(HomePage);
			});
		}
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad DashboardPage');
	}

	goRegistration()
	{
		this.navCtrl.push(RegistrationPage);
	}

	goEvents()
	{
		this.navCtrl.push(EventsPage);
	}

	goEntries()
	{
		this.navCtrl.push(ViewEntriesPage);
	}
}
