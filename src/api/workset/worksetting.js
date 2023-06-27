import request from '@/utils/request'

// 查询工序设置列表
export function listWorksetting(query) {
  return request({
    url: '/workset/worksetting/list',
    method: 'get',
    params: query
  })
}

// 查询工序设置详细
export function getWorksetting(workId) {
  return request({
    url: '/workset/worksetting/' + workId,
    method: 'get'
  })
}

// 新增工序设置
export function addWorksetting(data) {
  return request({
    url: '/workset/worksetting',
    method: 'post',
    data: data
  })
}

// 修改工序设置
export function updateWorksetting(data) {
  return request({
    url: '/workset/worksetting',
    method: 'put',
    data: data
  })
}

// 删除工序设置
export function delWorksetting(workId) {
  return request({
    url: '/workset/worksetting/' + workId,
    method: 'delete'
  })
}
