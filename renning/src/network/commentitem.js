import {request} from "./require";

export function CommentItem(allData){
  return request({
    url: '/suggest',
    method: 'post',
    headers: {'X-Requested-With':'XMLHttpRequest'},
    data: allData
  })
}
export function getComment(id){
  return request({
    url: '/suggest',
    // headers: {'X-Requested-With':'XMLHttpRequest'},
    params:{
      id
    }
  })
}