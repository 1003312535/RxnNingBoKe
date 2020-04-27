import { request } from './require.js'
export function Watch(id,watch) {
  return request({
    url: '/watch',
    params:{
      id,
      watch
    }
  })
}
