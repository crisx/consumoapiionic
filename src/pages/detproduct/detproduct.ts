import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../interfaces/post.interface';

@IonicPage()
@Component({
  selector: 'page-detproduct',
  templateUrl: 'detproduct.html',
})
export class DetproductPage {

  postSelected: Post;

  	constructor(public navCtrl: NavController, public navParams: NavParams) {

  		this.postSelected = this.navParams.get('currentPost');

  	}

  	ionViewDidLoad() {

  		console.log('ionViewDidLoad DetproductPage');

  	}

}
