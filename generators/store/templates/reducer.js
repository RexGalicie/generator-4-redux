import * as types from './types';
import createReducer from '../reducers';

const initialState = {
  data: [],
  meta: {},
  loading: false,
  errror: null,
};
const success = (state, { payload }) => ({
  ...state,
  data: payload.data,
  meta: payload.meta,
  loading: false,
});

const request = (state, { payload }) => ({
  ...state,
  loading: payload
});

const error = (state, { payload }) => ({
  ...state,
  error: payload,
  loading: false,
});

export default createReducer(initialState, {
  [types.REQUEST]: request,
  [types.SUCCESS]: success,
  [types.ERROR]: error
});