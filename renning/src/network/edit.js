import {request} from "./require";

export function Edit(allData){
  return request({
    url: '/edit',
    method: 'post',
    headers: {'X-Requested-With':'XMLHttpRequest'},
    data: allData
  })
}