import {LOGIN_IN, LOGIN_OUT} from '../type'

export default function loginIN(payload) {
    return { type: LOGIN_IN, payload }
  };

export function loginOut(payload) {
    return { type: LOGIN_OUT, payload }
  };

  export function counter(payload) {
    return { type: "COUNTER", payload }
  };
