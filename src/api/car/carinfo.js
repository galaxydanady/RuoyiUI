import request from '@/utils/request'

// 查询车间信息列表
export function listCarinfo(query) {
  return request({
    url: '/car/carinfo/list',
    method: 'get',
    params: query
  })
}

// 查询车间信息详细
export function getCarinfo(carId) {
  return request({
    url: '/car/carinfo/' + carId,
    method: 'get'
  })
}

// 新增车间信息
export function addCarinfo(data) {
  return request({
    url: '/car/carinfo',
    method: 'post',
    data: data
  })
}

// 修改车间信息
export function updateCarinfo(data) {
  return request({
    url: '/car/carinfo',
    method: 'put',
    data: data
  })
}

// 删除车间信息
export function delCarinfo(carId) {
  return request({
    url: '/car/carinfo/' + carId,
    method: 'delete'
  })
}
