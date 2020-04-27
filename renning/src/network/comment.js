import {request} from "./require";

export function Comment(title){
  return request({
    url: '/comment',
    params:{
      title
    }
  })
}