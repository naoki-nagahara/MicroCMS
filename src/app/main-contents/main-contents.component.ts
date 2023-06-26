import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BlogServiceService } from '../service/blog-service.service';
import { Store } from '@ngrx/store';
import { mainAction } from '../action/main.action';
import { MainContentsType } from '../type/type';

@Component({
  selector: 'app-main-contents',
  templateUrl: './main-contents.component.html',
  styleUrls: ['./main-contents.component.scss'],
})
export class MainContentsComponent implements OnDestroy {
  microData!: Observable<any>;
  contentsData!: any;
  subscription!: Subscription;
  constructor(
    private service: BlogServiceService,
    private store: Store<{ mainStore: MainContentsType }>
  ) {}
  ngOnDestroy() {
    console.log('破棄');
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.microData = this.service.getData('articles');
    this.subscription = this.microData.subscribe((data: MainContentsType) => {
      this.store.dispatch(mainAction({ data: data }));
      this.store.select('mainStore').subscribe((data: MainContentsType) => {
        console.log(data, 'mainStore');
        this.contentsData = data.data.contents;
      });
    });
  }
}
