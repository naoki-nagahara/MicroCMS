import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mainAction } from '../action/main.action';
import { catchError, exhaustMap, map, mergeMap, take, tap, of } from 'rxjs';
import { BlogServiceService } from '../service/blog-service.service';
import { Injectable } from '@angular/core';
import { subAction } from '../action/sub.action';
import { SubContentsType } from '../type/type';

@Injectable()
export class SubEffects {
  constructor(
    private service: BlogServiceService,
    private store: Store<{ subStore: SubContentsType }>,
    private actions$: Actions
  ) {}

  subEffects = createEffect(
    (): any => {
      return this.actions$.pipe(
        ofType(subAction),
        exhaustMap((): any => {
          return this.service.getData('sub').pipe(
            map((data: any) => {
              let newObj = { ...data };
              let randomNumber = Math.floor(
                Math.random() * data.contents.length
              );
              console.log(randomNumber);
              newObj.contents[randomNumber] = Object.assign(
                newObj.contents[randomNumber],
                {
                  hit: '当たり',
                }
              );
              console.log(newObj, '加工データ。これをdispatch');
              // return of(newObj);
              return this.store.dispatch(subAction({ data: newObj }));
            })
          );
        })
      );
    },
    { dispatch: false }
  );
}
// exhaustMap:
// 新しいアクションが発行されるまで同じアクションに対して1回のみEffectを実行するため、
// 無限ループを防ぐのに適しています。
