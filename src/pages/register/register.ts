import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	email:string;
	password:string;
	confirmPassword:string;

	loading: any;

	constructor(private fire: AngularFireAuth, public toastCtrl: ToastController, 
		public navCtrl: NavController, public navParams: NavParams,
		public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

		this.loading = this.loadingCtrl.create({
			content: "Please Wait...",
			spinner: "bubbles",
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegisterPage');
	}

	goLogin()
	{
		this.navCtrl.push(HomePage);
	} 

	createToast(msg)
	{
		let toast = this.toastCtrl.create({
			message: msg,
			duration: 3000,
			position: 'bottom',
			cssClass: 'dark-trans',
			closeButtonText: 'OK',
			showCloseButton: true
		  });
		  toast.present();
	}

	register()
	{
		this.loading.present();
		if(this.email != "" && this.password == this.confirmPassword)
		{
			this.fire.auth.createUserWithEmailAndPassword(this.email, this.confirmPassword)
			.then(data => {
				this.loading.dismiss().then(() => {
					console.log("got data", data);
					let user = firebase.auth().currentUser;
					user.sendEmailVerification();
					this.createToast("Account Created Successfully!");
					this.navCtrl.setRoot(HomePage);
				});
			})
			.catch(error => {
				console.log("got an error", error);
			});		
		}
		else{
			const alert = this.alertCtrl.create({
				title: 'Passwords do not match!',
				subTitle: 'Please try again!',
				buttons: ['OK']
			});
			alert.present();
		}
	}

}
