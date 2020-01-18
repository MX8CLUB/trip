// 将一个函数封装成节流函数
export function buildDeShake(fn,delay = 300) { 
  let timer = null
  let pre = +new Date()
  return function () { 
    let now = +new Date()
    if (pre - now >= delay) {
      fn()
      pre = new
    }
  }
}