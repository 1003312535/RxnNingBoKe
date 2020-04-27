import {request} from "./require";

export function FindTag(tag){
  return request({
    url: '/tag',
    params:{
      tag
    }
  })
}