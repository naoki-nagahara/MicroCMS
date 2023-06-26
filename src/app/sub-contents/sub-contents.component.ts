import { Component } from '@angular/core';
import { Observable, take } from 'rxjs';
import { BlogServiceService } from '../service/blog-service.service';
import { Store } from '@ngrx/store';
import { subAction } from '../action/sub.action';
import { Subscription } from 'rxjs';
import { ContentsType, SubContentsType } from 'src/app/type/type';

@Component({
  selector: 'app-sub-contents',
  templateUrl: './sub-contents.component.html',
  styleUrls: ['./sub-contents.component.scss'],
})
export class SubContentsComponent {
  contentData: any;
  subscription!: Subscription;
  constructor(
    private service: BlogServiceService,
    private store: Store<{ subStore: SubContentsType }>
  ) {}
  ngOnDestroy() {
    console.log('破棄');
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.subscription = this.service.getData('sub').subscribe((data: any) => {
      console.log('SUB');
      this.store.dispatch(subAction({ data: data }));
      this.store.select('subStore').subscribe((data: any) => {
        console.log(data, 'subStore'), (this.contentData = data.data.contents);
      });
    });
  }
}
