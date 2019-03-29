const parseQuery = query => {
  query = query ? query : location.search
  query = decodeURIComponent(query.substring(1))
  let result = {}
  if (query) {
    let queryJson = query.split('&')
    queryJson.forEach(item => {
      item = item.split('=')
      result[ item[0] ] = decodeURIComponent(item [ 1 ])
    })
  }
  return result
}

export default parseQuery