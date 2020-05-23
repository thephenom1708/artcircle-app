import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    	firebase.auth().signOut();
		const alert = this.alertCtrl.create({
			title: 'Thanks for Visiting!',
			subTitle: 'You are successfully logged out!',
			buttons: ['OK']
			});
			alert.present().then(data => {
				this.navCtrl.setRoot(HomePage);
			});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
