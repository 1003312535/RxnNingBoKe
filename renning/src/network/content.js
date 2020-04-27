import {request} from "./require";

export function Content(page){
  return request({
    url: '/',
    method: 'get',
    headers: {'X-Requested-With':'XMLHttpRequest'},
    params:{
      page
    }
  })
}