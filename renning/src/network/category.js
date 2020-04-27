import {request} from "./require";

export function FindCategory(category){
  return request({
    url: '/category',
    params:{
      category
    }
  })
}