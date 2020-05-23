import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';
import { EditEntryPage } from '../edit-entry/edit-entry';
import { RegistrationPage } from '../registration/registration';

@IonicPage()
@Component({
  selector: 'page-entry-list',
  templateUrl: 'entry-list.html',
})
export class EntryListPage {

	event:string;
	count = 0;
	
	user: any
	userEmail: string;
	title: string;
	college: string;
	type: string;

	allEntries: Observable<any[]>;

	constructor(public database: AngularFireDatabase, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {

			this.user = firebase.auth().currentUser;
			this.userEmail = firebase.auth().currentUser.email;
			
			if(this.user != null)
			{
				this.type = this.navParams.get('type');
				if(this.type == "event")
				{
					this.event = this.navParams.get('data');
				}
				else{
					this.college = this.navParams.get('data');
				}
				this.title = this.navParams.get('data');

				this.allEntries = this.database.list('all-entries').valueChanges();
				///console.log(Object.keys(this.allEntries).length);
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

	editEntry(yuvaId: string)
	{
		this.navCtrl.push(EditEntryPage, {
			data: yuvaId
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EntryListPage');
		this.title = this.navParams.get('data');
		this.type = this.navParams.get('type');
		if(this.type == "event")
		{
			this.event = this.navParams.get('data');
		}
		else{
			this.college = this.navParams.get('data');
		}
		this.allEntries = this.database.list('all-entries').valueChanges();
	}

}
