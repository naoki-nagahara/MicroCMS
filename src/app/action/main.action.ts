import { createAction, props } from '@ngrx/store';
import { MainContentsType } from '../type/type';

export const mainAction = createAction(
  'mainAction',
  props<{ data: MainContentsType }>()
);
