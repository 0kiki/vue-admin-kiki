import request from '@/utils/request'

export function getData() {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get'
  }
  )
}
