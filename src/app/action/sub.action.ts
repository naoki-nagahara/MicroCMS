import { createAction, props } from '@ngrx/store';
import { SubContentsType } from '../type/type';

export const subAction = createAction(
  'subAction',
  props<{ data: SubContentsType }>()
);
