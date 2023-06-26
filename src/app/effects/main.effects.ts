import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BlogServiceService } from '../service/blog-service.service';
import { Store } from '@ngrx/store';
import { mainAction } from '../action/main.action';
import { catchError, exhaustMap, map, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { MainContentsType } from '../type/type';

@Injectable()
export class MainEffects {
  constructor(
    private action$: Actions,
    private service: BlogServiceService,
    private store: Store<{ mainStore: MainContentsType }>
  ) {}
  mainEffects = createEffect(
    (): any => {
      return this.action$.pipe(
        ofType(mainAction),
        exhaustMap((): any => {
          return this.service.getData('articles').pipe(
            map((data: any) => {
              let newObj = { ...data };
              newObj.contents[0] = Object.assign(newObj.contents[0], {
                new: '最新の投稿',
              });
              console.log(newObj);
              return this.store.dispatch(mainAction({ data: newObj }));
            }),
            catchError((data): any => console.log(data))
          );
        })
      );
    },
    { dispatch: false }
  );
}
