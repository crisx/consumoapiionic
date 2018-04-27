
import { PostProvider } from './../../providers/post/post';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post } from '../../interfaces/post.interface';
import { Observable } from 'rxjs';

@Component({

  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  posts: Post[];

  constructor(public navCtrl: NavController, private postsProvider: PostProvider) {

    postsProvider.getPostsHttp().subscribe((content) => {

      this.posts = content;

    });
  }

  goToProduct(post): void {

    this.navCtrl.push('DetproductPage', {

			currentPost: post

		});

  }

}
