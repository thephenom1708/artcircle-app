import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { EntryListPage } from '../entry-list/entry-list';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-view-entries',
  templateUrl: 'view-entries.html',
})
export class ViewEntriesPage {

	public entryListRef: any[];
	allEntries: Observable<any[]>;

	user: any;
	loading: any;
	filterType: string;


	collegeList = [
		"WCE Sangli",
		"Willingdon Sangli",
		"Nanasaheb Mahadik Polytechnic",
		"Chintamanrao Management College, Sangli",
		"DOTE, Kolhapur",
		"CSIBER, Kolhapur",
		"Miraj Govt. College of Pharmacy",
		"Appasaheb Birnale College of Pharmacy",	
		"PVPIT Budhgaon",
		"Ganpatrao Arwade College of Commerce",
		"Dental College & Hospital",
		"JJ Magdum",
		"Shri Ambabai Talim Sansthas, COE Sangli",
		"DKTE Ichalkaranji",
		"SGI Kolhapur",
		"Govt. Medical College Sangli",
		"Anandrao Balwantrao Naik College Shirala",
		"Dr. Vasantrao Patil Mahavidyalaya Tasgaon",
		"Women's Polytechnic Tasgaon",
		"Kasturbai Walchand College Sangli",
		"Arts & Commerce College Kasegaon",
		"Vitthal Lahane Polytechnic Sangli",
		"Jadhav Polytechnic Bhose",
		"Patangrao Kadam Mahavidyalaya Sangli",
		"Atpadi College",
		"Dange College Ashta",
		"Sanjay Bhokre Sangli",
		"Bharti Vidyapeeth, Sangli",
		"RIT Islampur",
		"Latthe Polytechnic",
		"Govt. Polytechnic Miraj",
		"Yashwantrao Chavan A & C College, Sangli",
		"Bharati Vidyapeeth Polytechnic Palus",
		"Shivajirao Deshmukh Institute",
		"Shantiniketan Polytechnic Sangli",
		"KE Society College of Engineering Sangli",
		"Govt. Medical College Miraj",
		"Polytechnic Palus",
		"Adarsh Institute of Technology, Vita",
		"Nanasaheb Mahadik COE, Walwa",
		"Appasaheb Birnale Sangli",
		"Balvant College, Vita",
		"Yashwantrao Chavan A & C College, Walwa",
		"Karmavir Bhaurao Patil COE, Satara",
		"KIT Kolhapur",
		"DY Patil COE, Kolhapur",
		"DY Patil Polytechnic, Kolhapur",
		"Nanasaheb Mahadik COE, Sangli",
		"Bharati Vidyapeeth COE, Kolhapur",
		"Sanjeevan Engg & Technology, Kolhapur",
		"Sharad Institute of Technology, Kolhapur",
		"Tatyasaheb Kore COE, Kolhapur",
		"Ashokrao Mane Polytechnic, Kolhapur",
		"Kolhapur Technology Institute, Kolhapur",
		"New Polytechnic College, Kolhapur",
		"Vivekanand college Kolhapur",
		"Tatyasaheb Kore Institute of Engg & Technology, Kolhapur",
		"College of Engineering, Kolhapur",
		"Dr. Daulatrao Aher COE, Karad",
		"Govt. College of Engineering, Karad",
		"Shree Santkrupa Institue of Engg & Technology, Karad",
		"Yashwantrao Mohite Institue of Management, Karad",
		"Govt. College of Pharmacy, Karad",
	];


	eventList:string[] = ["Natyankur", "Swartarang", "Yuva's Got Talent", "Kavyanjali", "Nrityaninad",
				"Moksha", "Shabdamanthan", "Akriti", "Shrijaa", "Muktapeeth", "Pratibimb",
				"Scavenger Hunt", "Aarekhan", "Mr & Ms Yuvarang", "PUBG"];

	constructor(private database: AngularFireDatabase, public alertCtrl: AlertController, 
		public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

			this.user = firebase.auth().currentUser;
			//this.startFun();
	}

	getEventCount()
	{
		let eventListCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	
		if(this.user != null)
		{
			this.allEntries = this.database.list('all-entries').valueChanges();
			firebase.database().ref('all-entries').on('value', function(snapshot){
				
				let eventList = ["Natyankur", "Swartarang", "Yuva's Got Talent", "Kavyanjali", "Nrityaninad",
				"Moksha", "Shabdamanthan", "Akriti", "Shrijaa", "Muktapeeth", "Pratibimb",
				"Scavenger Hunt", "Aarekhan", "Mr & Ms Yuvarang", "PUBG"];
				
				snapshot.forEach(dataSnap => {
					let event = dataSnap.child('event').val();

					let eventIndex = eventList.indexOf(event);
					eventListCount[eventIndex]++;

					for(var i = 0; i < 15; i++)
					{
						document.getElementById(i.toString()).innerHTML = eventListCount[i].toString();
					}
				});
			});
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


	getCollegeCount()
	{
		let collegeListCount = new Array(63);
		collegeListCount.fill(0);
		
		if(this.user != null)
		{
			this.allEntries = this.database.list('all-entries').valueChanges();
			firebase.database().ref('all-entries').on('value', function(snapshot){

			let collegeList = [
				"WCE Sangli",
				"Willingdon Sangli",
				"Nanasaheb Mahadik Polytechnic",
				"Chintamanrao Management College, Sangli",
				"DOTE, Kolhapur",
				"CSIBER, Kolhapur",
				"Miraj Govt. College of Pharmacy",
				"Appasaheb Birnale College of Pharmacy",	
				"PVPIT Budhgaon",
				"Ganpatrao Arwade College of Commerce",
				"Dental College & Hospital",
				"JJ Magdum",
				"Shri Ambabai Talim Sansthas, COE Sangli",
				"DKTE Ichalkaranji",
				"SGI Kolhapur",
				"Govt. Medical College Sangli",
				"Anandrao Balwantrao Naik College Shirala",
				"Dr. Vasantrao Patil Mahavidyalaya Tasgaon",
				"Women's Polytechnic Tasgaon",
				"Kasturbai Walchand College Sangli",
				"Arts & Commerce College Kasegaon",
				"Vitthal Lahane Polytechnic Sangli",
				"Jadhav Polytechnic Bhose",
				"Patangrao Kadam Mahavidyalaya Sangli",
				"Atpadi College",
				"Dange College Ashta",
				"Sanjay Bhokre Sangli",
				"Bharti Vidyapeeth, Sangli",
				"RIT Islampur",
				"Latthe Polytechnic",
				"Govt. Polytechnic Miraj",
				"Yashwantrao Chavan A & C College, Sangli",
				"Bharati Vidyapeeth Polytechnic Palus",
				"Shivajirao Deshmukh Institute",
				"Shantiniketan Polytechnic Sangli",
				"KE Society College of Engineering Sangli",
				"Govt. Medical College Miraj",
				"Polytechnic Palus",
				"Adarsh Institute of Technology, Vita",
				"Nanasaheb Mahadik COE, Walwa",
				"Appasaheb Birnale Sangli",
				"Balvant College, Vita",
				"Yashwantrao Chavan A & C College, Walwa",
				"Karmavir Bhaurao Patil COE, Satara",
				"KIT Kolhapur",
				"DY Patil COE, Kolhapur",
				"DY Patil Polytechnic, Kolhapur",
				"Nanasaheb Mahadik COE, Sangli",
				"Bharati Vidyapeeth COE, Kolhapur",
				"Sanjeevan Engg & Technology, Kolhapur",
				"Sharad Institute of Technology, Kolhapur",
				"Tatyasaheb Kore COE, Kolhapur",
				"Ashokrao Mane Polytechnic, Kolhapur",
				"Kolhapur Technology Institute, Kolhapur",
				"New Polytechnic College, Kolhapur",
				"Vivekanand college Kolhapur",
				"Tatyasaheb Kore Institute of Engg & Technology, Kolhapur",
				"College of Engineering, Kolhapur",
				"Dr. Daulatrao Aher COE, Karad",
				"Govt. College of Engineering, Karad",
				"Shree Santkrupa Institue of Engg & Technology, Karad",
				"Yashwantrao Mohite Institue of Management, Karad",
				"Govt. College of Pharmacy, Karad",
			];
		
				
				snapshot.forEach(dataSnap => {
					let college = dataSnap.child('college').val();

					let collegeIndex = collegeList.indexOf(college);
					collegeListCount[collegeIndex]++;

					for(var i = 0; i < 63; i++)
					{
						document.getElementById(i.toString() + i.toString()).innerHTML = collegeListCount[i].toString();
					}
				});
			});
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
		this.loading = this.loadingCtrl.create({
			content: "Please Wait...",
			spinner: "bubbles",
			duration: 3000
		});
		console.log('ionViewDidLoad ViewEntriesPage');

		this.loading.present().then(() => {
			this.loading.dismiss().then(() => {
				//this.performSegmentActivity('event');
				this.getEventCount();
			});
		});
	}


	performSegmentActivity(type:string)
	{
		if(type == 'event')
		{
			this.getEventCount();
		}
		else
		{
			this.getCollegeCount();
		}
	}

	getEventEntries(event:string)
	{
		this.navCtrl.push(EntryListPage, {
			data: event,
			type: "event"
		});
	}

	getCollegeEntries(college: string)
	{
		this.navCtrl.push(EntryListPage, {
			data: college,
			type: "college"
		});
	}

}
