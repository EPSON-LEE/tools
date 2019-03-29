/*
 * @Description: 判断数据类型
 * @Author: leejiahao
 * @LastEditors: Please set LastEditors
 * @Date: 2019-03-29 11:29:01
 * @LastEditTime: 2019-03-29 11:41:02
 */

const getType = (x) => {
  return x === undefined ? 'undefined' : x === null ? null : x.constructor.name.toLowerCase()
} 

export default getType