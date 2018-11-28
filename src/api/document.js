import request from '@/utils/request'

export function getList() {
  return request({
    url: '../../static/data/documentlist.json',
    method: 'get'
  })
}
