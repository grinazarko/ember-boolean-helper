import Ember from 'ember';

export function gtOrEq(params) {
  if (params.length === 2)
    return params[0] >= params[1];
  else
    throw new Error('There have to be two arguments')
}

export default Ember.Helper.helper(gtOrEq);
