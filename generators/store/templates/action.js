import { getAll } from '../api/<%= name %>'
import * as types from './types';

const request = () => {
  return {
    type: types.REQUEST,
    payload: true,
  }
}

const success = payload => {
  return {
    type: types.SUCCESS,
    payload,
  }
}

const error = payload => {
  return {
    type: types.ERROR,
    payload,
  }
}

const load<%= name %> = params => {  
  return dispatch => {
    dispatch(request());    
    getAll(params)
      .then(res => {
        dispatch(success(res.data));
    }).catch(e => {
      dispatch(error(e))
    });
  }
};

 
export { load<%= name %> };
