//封装的防抖函数
function debounce(func, delay = 500) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, delay);
  }
}
//封装的时间戳格式化
function  formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear()+ '').substr(4-RegExp.$1.length))
  }
  let o = {
    'M+':date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str : padLeftZero (str))
    }
  }
  return fmt;
}
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

export {
  debounce,
  formatDate
}
