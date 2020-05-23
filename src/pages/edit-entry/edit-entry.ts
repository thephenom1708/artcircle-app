import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController, ToastController, LoadingController} from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { NewEntry } from '../../models/newEntryInterface';
import { HomePage } from '../home/home';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-edit-entry',
  templateUrl: 'edit-entry.html',
})
export class EditEntryPage {


	yuvaId: string;
	name: string;
	email: string;
	mobile: string;
	college: string;
	event: string;
	type: string;
	payMode: string;
	totalFee: Number;
	paidFee: Number;
	entryTakenBy: string;

	user: any
	newEntry = {} as NewEntry;
	entryListRef: Observable<any[]>;


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
 

	constructor(private database: AngularFireDatabase, public navCtrl: NavController,
		public navParams: NavParams, public alertCtrl: AlertController,
		public toastCtrl: ToastController, public loadingCtrl: LoadingController) {

			this.yuvaId = this.navParams.get('data');
			this.entryListRef = this.database.list('all-entries').valueChanges();				
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditEntryPage');
		this.yuvaId = this.navParams.get('data');
		this.entryListRef = this.database.list('all-entries').valueChanges();
	}

	updateEntry()
	{
		
	}

}
