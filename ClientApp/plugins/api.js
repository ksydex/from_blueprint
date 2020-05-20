function Api(ctx) {
  const axios = ctx.$axios

  return {
    House: {
      getById: id => axios.$get('/house' + '?id=' + id),
      getByIds: ids => axios.$get('/house' + `?id=` + ids.join('&id=')),
      getAll: () => axios.$get('/house'),
      getWithFilter: (descending) => axios.$get('/house/filter' + (typeof descending === 'boolean' ? ('?descending=' + descending.toString()) : ''))
    }
  }
}

export default (ctx, inject) => {
  const api = new Api(ctx)
  ctx.$api = api
  inject('api', api)
}
