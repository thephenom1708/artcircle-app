import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController, ToastController, LoadingController} from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { NewEntry } from '../../models/newEntryInterface';
//import { EmailComposer } from '@ionic-native/email-composer';
import { HomePage } from '../home/home';
import { Observable } from 'rxjs';
//import { SMS } from '@ionic-native/sms';

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
 	@ViewChild('slider') slider: Slides ;

	selectedPage = 0;
	SwipedTabsIndicator:any= null;

	loading: any;

	regCategory:string;
	disabled:boolean;

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
	entryListRef$: AngularFireList<NewEntry>;

	public collegeList = [
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

	soloEventList = ["Natyankur", "Swartarang", "Yuva's Got Talent", "Kavyanjali", "Nrityaninad",
								"Akriti", "Shrijaa", "Muktapeeth", "Pratibimb", "Scavenger Hunt", "Aarekhan",
								"Mr & Ms Yuvarang"];
			
	duetEventList = ["Shabdamanthan", "Swartarang", "Nrityaninad"];
	groupEventList = ["Natyankur", "Swartarang", "Nrityaninad", "Moksha", "Scavenger Hunt", "PUBG"];
 
		constructor(private database: AngularFireDatabase, public navCtrl: NavController,
			public navParams: NavParams, public alertCtrl: AlertController,
			public toastCtrl: ToastController, public loadingCtrl: LoadingController) 
		{			
			this.user = firebase.auth().currentUser;
			if(this.user != null)
			{
				this.entryListRef$ = this.database.list('all-entries');
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


  	ionViewDidEnter() {

		this.disabled = false;
		this.loading = this.loadingCtrl.create({
			content: "Please Wait...",
			spinner: "bubbles",
		});

		this.SwipedTabsIndicator = document.getElementById("indicator");
		this.user = firebase.auth().currentUser;
			if(this.user != null)
			{
				this.entryListRef$ = this.database.list('all-entries');
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

	fun()
	{
		let cnt = 0;
		firebase.database().ref('all-entries').on('value', function(snapshot){
			cnt = snapshot.numChildren();
		});
		console.log(cnt);
		return cnt;
	}
	  
	addNewEntry()
	{	
		this.disabled = true;
		this.loading.present();

		this.newEntry.date = new Date().toISOString().slice(0, 10);
		this.newEntry.yuvaId = this.yuvaId.toUpperCase();
		this.newEntry.name = this.name;
		this.newEntry.email = this.email;
		this.newEntry.mobile = this.mobile;
		this.newEntry.college = this.college;
		this.newEntry.event = this.event;
		this.newEntry.payMode = this.payMode;
		this.newEntry.totalFee = Number(this.totalFee);
		this.newEntry.paidFee = Number(this.paidFee);
		this.newEntry.type = this.regCategory;
		this.newEntry.entryTakenBy = this.entryTakenBy;

		/*let id = null;
		let cnt = this.fun();
		if(cnt+1 < 10)
		{
			id = "00" + (cnt+1).toString();
		}
		else if(cnt+1 >= 10 && cnt+1 < 100)
		{
			id = "0" + (cnt+1).toString();
		}
		else 
		{
			id = (cnt+1).toString();
		}*/

		//this.newEntry.yuvaID = "YUVA-" + this.name.substring(0,3) + "-" + id;
		//console.log("Hello" + this.newEntry.yuvaID);
		this.entryListRef$.push(this.newEntry)
		.then(data => {

			//this.sms.send('8600611198', "Thanks for registration!");

			/*this.emailComposer.isAvailable().then((available: boolean) =>{
				if(available) {
			
				}
			}).catch(error => {
				console.log(error);
			});*/

			/*var emailBody = `You are successfully registered for Yuvarang 2019!`;
			emailBody += `
			Name: ` + this.name;
			emailBody += `
			College: ` + this.college ;
			emailBody += `
			Event: ` + this.event;
			emailBody += `
			Payment Mode: ` + this.payMode;
			emailBody += `
			Total Fee: ` + this.totalFee;
			emailBody += `
			Paid Fee: ` + this.paidFee;
			emailBody += `
			Thank you for the registration!`;



			let email = {
				to: this.email,
				cc: [],
				bcc: [],
				attachments: [],
				subject: 'Registration for Yuvarang 2019 !',
				body: emailBody,
				isHtml: true,
				app: 'gmail'
			  };
			
			this.emailComposer.open(email).then(data => {
				console.log(email);
			});	*/		

			this.loading.dismiss().then(() => {
				const alert = this.alertCtrl.create({
					title: 'Registration Successful!',
					subTitle: 'Thanks for registering in Yuvarang 2019!',
					buttons: ['OK']
				});
				alert.present();
			});
		})
		.then(error => {
			console.log(Error);
		});
		this.newEntry = {} as NewEntry;
	}

}
