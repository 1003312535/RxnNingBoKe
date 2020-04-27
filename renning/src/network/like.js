import { request } from './require.js'
export function Like(id,like) {
  return request({
    url: '/like',
    params:{
      id,
      like
    }
  })
}
