import { post } from '@/utils/request'

/**
 * 题库详情
 * @param data
 */
export function fetchDetail(id) {
  return post('/exam/exam/detail', { id: id })
}

/**
 * 保存题库
 * @param data
 */
export function saveData(data) {
  return post('/exam/exam/save', data)
}

/**
 * 创建试卷
 * @param data
 */
export function createPaper(data) {
  return post('/paper/paper/create-paper', data)
}

/**
 * 试卷详情
 * @param data
 */
export function paperDetail(data) {
  return post('/paper/paper/paper-detail', data)
}

/**
 * 题目详情
 * @param data
 */
export function quDetail(data) {
  return post('/paper/paper/qu-detail', data)
}

/**
 * 填充答案
 * @param data
 */
export function fillAnswer(data) {
  return post('/paper/paper/fill-answer', data)
}

/**
 * 交卷
 * @param data
 */
export function handExam(data) {
  return post('/paper/paper/hand-exam', data)
}

/**
 * 试卷详情
 * @param data
 */
export function paperResult(data) {
  return post('/paper/paper/paper-result', data)
}

/**
 * 错题训练
 * @param data
 */
export function training(data) {
  return post('/paper/paper/training', data)
}

/**
 * 获取闯关题库
 */
export function getQuBank(data) {
  return request({
    url: '/exam/api/qu/repo/paging',
    method: 'post',
    data: data
  })
}

/**
 * 获取闯关的题目
 */
export function getExercise(data) {
  return request({
    url: '/exam/api/exercises/exercises/exercises',
    method: 'get',
    params: data
  })
}
