import Ember from 'ember';

export function eq(params) {
  if (params.length > 1)
    return params.every(i => i === params[0]);
  else
    throw new Error('There have to be more than one argument')
}

export default Ember.Helper.helper(eq);
