import request from '@/utils/request'

// 查询设备信息列表
export function listDevice(query) {
  return request({
    url: '/dev/device/list',
    method: 'get',
    params: query
  })
}

// 查询设备信息详细
export function getDevice(deviceId) {
  return request({
    url: '/dev/device/' + deviceId,
    method: 'get'
  })
}

// 新增设备信息
export function addDevice(data) {
  return request({
    url: '/dev/device',
    method: 'post',
    data: data
  })
}

// 修改设备信息
export function updateDevice(data) {
  return request({
    url: '/dev/device',
    method: 'put',
    data: data
  })
}

// 删除设备信息
export function delDevice(deviceId) {
  return request({
    url: '/dev/device/' + deviceId,
    method: 'delete'
  })
}
