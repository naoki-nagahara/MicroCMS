import { createReducer, on } from '@ngrx/store';
import { mainAction } from '../action/main.action';
import { MainContentsType } from '../type/type';
interface InitType {
  data: MainContentsType | string;
}

const InitialData: InitType = {
  data: 'メインの初期値',
};

export const mainReducer = createReducer(
  InitialData,
  on(mainAction, (state, { data }) => ({
    ...state,
    data: data,
  }))
);
