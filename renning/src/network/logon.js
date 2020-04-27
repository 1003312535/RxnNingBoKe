import {request} from "./require";
export function logonUser(nickname,password) {
  return request({
    url: '/logon',
    params: {
      nickname,
      password
    }
  })
}