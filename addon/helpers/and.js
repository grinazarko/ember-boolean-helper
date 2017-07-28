import Ember from 'ember';

export function and(params) {
  if (params.length > 1)
    return params.every((i) => i);
  else
    throw new Error('There have to be more than one argument')
}

export default Ember.Helper.helper(and);
