import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from 'src/env';
import { ContentsType } from '../type/type';

@Injectable({
  providedIn: 'root',
})
export class BlogServiceService {
  constructor() {}

  getData(params: string): Observable<ContentsType> {
    return new Observable((sub) => {
      ENVIRONMENT.get({
        endpoint: params,
      }).then((data: ContentsType) => {
        console.log(data, 'serviceからのデータ');
        sub.next(data);
        sub.complete();
      });
    });
  }
}
