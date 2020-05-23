import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {

	email:string;
	password:string;

	loading: any;

	  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public alertCtrl: AlertController,
		public toastCtrl: ToastController, public loadingCtrl: LoadingController) {

			this.loading = this.loadingCtrl.create({
				content: "Please Wait...",
				spinner: "bubbles",
			});
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
	  
	login()
	{
		this.loading.present();
		if(this.email != "" || this.password != "")
		{
			this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
			.then(data => {
				this.loading.dismiss().then(() => {
					console.log("Got data and user logged in", data);
					const alert = this.alertCtrl.create({
						title: 'Login Successful!',
						subTitle: 'You are logged in!',
						buttons: ['OK']
					});
					alert.present().then(data => {
						this.navCtrl.setRoot(DashboardPage);
					});
				});
			})
			.catch(error => {
				this.loading.dismiss().then(() => {
					const alert = this.alertCtrl.create({
						title: 'Invalid Credentials!',
						subTitle: 'Please try again!',
						buttons: ['OK']
					});
					alert.present();
				});
			});
		}
		else{
			this.loading.dismiss().then(() => {
				const alert = this.alertCtrl.create({
					title: 'Invalid Credentials!',
					subTitle: 'Please try again!',
					buttons: ['OK']
				});
				alert.present();
			});
		}
	}

	goRegister()
	{
		this.navCtrl.push(RegisterPage);
	} 

	forgotPass() {
		let forgot = this.alertCtrl.create({
		  	title: 'Forgot Password?',
		  	message: "Enter you email address to send a reset link password.",
		  	inputs: [
				{
					name: 'email',
					placeholder: 'Email',
					type: 'email'
				},
		  	],
			buttons: 
			[
				{
			  		text: 'Cancel',
			  		handler: data => {
						
						console.log('Cancel clicked');
			 		}
			},
			{
			  text: 'Send',
			  handler: data => {
				console.log('Send clicked');
				var auth = firebase.auth();
				auth.sendPasswordResetEmail(data.email)
				.then(() => {
					this.createToast('Email was sent successfully !');
				})
				.catch(error => {

				});
			  }
			}
		  ]
		});
		forgot.present();
	  }
}
