import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id : any;
  post : any;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    let path = '/flamelink/environments/production/content/blogPost/en-US/' + this.id;
    const object = this.db.object(path).valueChanges();
    object.subscribe(obj => {
      this.post = obj;
      this.loading = false; 
    })
  }

  ngOnInit() {    
  }

}
