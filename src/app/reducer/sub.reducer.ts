import { createReducer, on } from '@ngrx/store';
import { subAction } from '../action/sub.action';
import { SubContentsType } from '../type/type';
interface InitType {
  data: SubContentsType | string;
}

const InitialData: InitType = {
  data: 'サブの初期値',
};

export const subReducer = createReducer(
  InitialData,
  on(subAction, (state, { data }) => ({
    ...state,
    data: data,
  }))
);
