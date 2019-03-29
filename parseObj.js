/*
 * @Description: 将对象转换为对象
 * @Author: leejiahao
 * @LastEditors: Please set LastEditors
 * @Date: 2019-03-29 11:59:44
 * @LastEditTime: 2019-03-29 12:02:53
 */

const parseObj = obj => {
  let res = ''
  Object.keys(obj).forEach(item => {
    res += item + '=' + obj[item] + '&'
  })
  return res.substring(0, res.length - 1)
}

export default parseObj