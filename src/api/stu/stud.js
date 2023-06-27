import request from '@/utils/request'

// 查询学生信息列表
export function listStud(query) {
  return request({
    url: '/stu/stud/list',
    method: 'get',
    params: query
  })
}

// 查询学生信息详细
export function getStud(studentId) {
  return request({
    url: '/stu/stud/' + studentId,
    method: 'get'
  })
}

// 新增学生信息
export function addStud(data) {
  return request({
    url: '/stu/stud',
    method: 'post',
    data: data
  })
}

// 修改学生信息
export function updateStud(data) {
  return request({
    url: '/stu/stud',
    method: 'put',
    data: data
  })
}

// 删除学生信息
export function delStud(studentId) {
  return request({
    url: '/stu/stud/' + studentId,
    method: 'delete'
  })
}
