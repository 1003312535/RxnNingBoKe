import { request } from './require.js'
export function Home() {
  // console.log(nickname,password)
  return request({
    url: '/allcount',
  })
}
